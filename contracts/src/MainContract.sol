// SPDX-License-Identifier: MIT

// Layout of Contract:
// version
// imports
// interfaces, libraries, contracts`
// errors
// Events
// Type declarations
// State variables
// Modifiers
// Functions

// Layout of Functions:
// constructor
// receive function (if exists)
// fallback function (if exists)
// external
// public
// internal
// private
// internal & private view & pure functions
// external & public view & pure functions

pragma solidity 0.8.19;

import {Treasury} from "./Treasury.sol";
import {ChainlinkCCIP} from "./tools/ChainlinkCCIP.sol";
import {ChainlinkFunctions} from "./tools/ChainlinkFunctions.sol";

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";

contract MainContract is CCIPReceiver {
    /*
        ___ _ __ _ __ ___  _ __ ___
       / _ \ '__| '__/ _ \| '__/ __|
      |  __/ |  | | | (_) | |  \__ \
       \___|_|  |_|  \___/|_|  |___/
    */
    error MainContract__EmptyArray();
    error MainContract__EmptyString();
    error MainContract__TransferFailed();
    error MainContract__InvalidAddress();
    error MainContract__InsufficientBalance();
    error MainContract__TransferFailedWithMessageId(uint256 _amount, bytes32 _messageId);

    /*
                            _
        _____   _____ _ __ | |_ ___
       / _ \ \ / / _ \ '_ \| __/ __|
      |  __/\ V /  __/ | | | |_\__ \
       \___| \_/ \___|_| |_|\__|___/
    */

    event MainContract__ChainlinkCCIPUpdated(address indexed _chainlinkCCIP);
    event MainContract__USDCTransferred(address indexed _to, uint256 indexed _amount);
    event MainContract__ChainlinkFunctionsUpdated(address indexed _chainlinkFunctions);
    event MainContract__AssetTransferDirectly(address indexed _to, uint256 indexed _amount);
    event MainContract__TransferSucceeded(uint256 indexed _amount, bytes32 indexed _messageId);
    event MainContract__RequestReceivedForCrossChainTransfer(
        address indexed _to, uint256 indexed _sourceChainSelector, uint256 _amount, bytes32 indexed _messageId
    );

    /*
       _                          _           _                 _   _
      | |_ _   _ _ __   ___    __| | ___  ___| | __ _ _ __ __ _| |_(_) ___  _ __
      | __| | | | '_ \ / _ \  / _` |/ _ \/ __| |/ _` | '__/ _` | __| |/ _ \| '_ \
      | |_| |_| | |_) |  __/ | (_| |  __/ (__| | (_| | | | (_| | |_| | (_) | | | |
       \__|\__, | .__/ \___|  \__,_|\___|\___|_|\__,_|_|  \__,_|\__|_|\___/|_| |_|
           |___/|_|
    */

    enum TOOL {
        CHAINLINK,
        HYPERLANE
    }

    struct CCIPData {
        uint256 chainId;
        uint256 amount;
        TOOL toolUsed;
    }

    /*
           _        _                         _       _     _
       ___| |_ __ _| |_ ___  __   ____ _ _ __(_) __ _| |__ | | ___  ___
      / __| __/ _` | __/ _ \ \ \ / / _` | '__| |/ _` | '_ \| |/ _ \/ __|
      \__ \ || (_| | ||  __/  \ V / (_| | |  | | (_| | |_) | |  __/\__ \
      |___/\__\__,_|\__\___|   \_/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/
    */
    string public s_password;
    address payable public s_chainlinkCCIP;
    address public s_chainlinkFunctions;

    address public immutable i_usdc;
    address public immutable i_factory;
    address public immutable i_treasury;

    /*
                           _ _  __ _
       _ __ ___   ___   __| (_)/ _(_) ___ _ __ ___
      | '_ ` _ \ / _ \ / _` | | |_| |/ _ \ '__/ __|
      | | | | | | (_) | (_| | |  _| |  __/ |  \__ \
      |_| |_| |_|\___/ \__,_|_|_| |_|\___|_|  |___/
    */
    modifier emptyStringCheck(string memory _string) {
        if (bytes(_string).length == 0) revert MainContract__EmptyString();
        _;
    }

    constructor(address _router, address _usdc, address _factory, address _treasury) CCIPReceiver(_router) {
        i_usdc = _usdc;
        i_factory = _factory;
        i_treasury = _treasury;
    }

    /*
                 _                        _
        _____  _| |_ ___ _ __ _ __   __ _| |
       / _ \ \/ / __/ _ \ '__| '_ \ / _` | |
      |  __/>  <| ||  __/ |  | | | | (_| | |
       \___/_/\_\\__\___|_|  |_| |_|\__,_|_|
    */

    function setChainlinkCCIP(address _chainlinkCCIP) external {
        s_chainlinkCCIP = payable(_chainlinkCCIP);
        emit MainContract__ChainlinkCCIPUpdated(_chainlinkCCIP);
    }

    function setChainlinkFunctions(address _chainlinkFunctions) external {
        s_chainlinkFunctions = _chainlinkFunctions;
        emit MainContract__ChainlinkFunctionsUpdated(_chainlinkFunctions);
    }
    /*
                   _     _ _
       _ __  _   _| |__ | (_) ___
      | '_ \| | | | '_ \| | |/ __|
      | |_) | |_| | |_) | | | (__
      | .__/ \__,_|_.__/|_|_|\___|
      |_|
    */

    /**
     * Function to send money to a recipient on multiple chains.
     * @param _to Recipient address
     * @param _ccipData Array of CCIPData
     */
    function sendAssets(address _to, CCIPData[] memory _ccipData) public payable {
        uint256 _ccipDataLength = _ccipData.length;
        if (_ccipData.length < 0) revert MainContract__EmptyArray();

        if (_ccipDataLength == 1 && _ccipData[0].chainId == block.chainid) {
            uint256 _amount = _ccipData[0].amount;
            _sendMoneyOnSameChain(_to, _amount);
        } else {
            _sendMoneyOnOtherChain(_ccipData);
        }
    }

    receive() external payable {}
    fallback() external payable {}

    /*
       _       _                        _
      (_)_ __ | |_ ___ _ __ _ __   __ _| |
      | | '_ \| __/ _ \ '__| '_ \ / _` | |
      | | | | | ||  __/ |  | | | | (_| | |
      |_|_| |_|\__\___|_|  |_| |_|\__,_|_|
    */

    function _ccipReceive(Client.Any2EVMMessage memory message) internal override {
        (address recipient, uint256 amt) = abi.decode(message.data, (address, uint256));
        bytes32 messageId = message.messageId;
        uint64 sourceChainSelector = message.sourceChainSelector;

        emit MainContract__RequestReceivedForCrossChainTransfer(recipient, sourceChainSelector, amt, messageId);

        _sendUSDCWithMessageId(recipient, amt, messageId);
    }

    /**
     * Function to send money to a recipient on the same chain.
     * @param _to Recipient address
     * @param _amount The amount of Assets to send
     */
    function _sendMoneyOnSameChain(address _to, uint256 _amount) internal {
        _sendUSDC(_to, _amount);
        emit MainContract__AssetTransferDirectly(_to, _amount);
    }

    function _sendMoneyOnOtherChain(CCIPData[] memory _ccipData) internal {
        for (uint256 i = 0; i < _ccipData.length;) {
            uint256 chainId = _ccipData[i].chainId;
            uint256 amount = _ccipData[i].amount;
            TOOL toolUsed = _ccipData[i].toolUsed;
            if (chainId == block.chainid) {
                if (amount > 0) _sendUSDC(i_treasury, amount);
            } else if (toolUsed == TOOL.CHAINLINK) {
                ChainlinkCCIP(s_chainlinkCCIP).sendMoneyOnOtherChain(i_treasury, chainId, amount);
            }

            unchecked {
                i++;
            }
        }
        ChainlinkFunctions(s_chainlinkFunctions).verifyTxns(new string[](0));
    }

    function _sendUSDC(address _to, uint256 _amount) internal {
        uint256 balance = IERC20(i_usdc).balanceOf(address(this));
        if (balance < _amount) revert MainContract__InsufficientBalance();

        emit MainContract__USDCTransferred(_to, _amount);
        // transfer call
        (bool success,) = i_usdc.call(abi.encodeWithSignature("transfer(address,uint256)", _to, _amount));

        if (!success) {
            revert MainContract__TransferFailed();
        }
    }

    function _sendUSDCWithMessageId(address _to, uint256 _amount, bytes32 _messageId) internal {
        uint256 balance = IERC20(i_usdc).balanceOf(address(this));
        if (balance < _amount) revert MainContract__InsufficientBalance();

        emit MainContract__USDCTransferred(_to, _amount);
        // transfer call
        (bool success,) = i_usdc.call(abi.encodeWithSignature("transfer(address,uint256)", _to, _amount));
        if (success) {
            emit MainContract__TransferSucceeded(_amount, _messageId);
        } else {
            revert MainContract__TransferFailedWithMessageId(_amount, _messageId);
        }
    }
}
