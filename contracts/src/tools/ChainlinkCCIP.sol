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

import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {Utils} from "../Utils.sol";
import {MainContract} from "../MainContract.sol";

contract ChainlinkCCIP {
    /*
        ___ _ __ _ __ ___  _ __
       / _ \ '__| '__/ _ \| '__|
    //   |  __/ |  | | | (_) | |
       \___|_|  |_|  \___/|_|
    */
    error ChainlinkCCIP__InvalidAddress();
    error ChainlinkCCIP__NotWhitelisted();
    error ChainlinkCCIP__NotEnoughTokens();
    error ChainlinkCCIP__NothingToWithdraw();
    error ChainlinkCCIP__FailedToWithdrawEth(address _from, address _to, uint256 _amount);

    /*
                            _
        _____   _____ _ __ | |_
       / _ \ \ / / _ \ '_ \| __|
      |  __/\ V /  __/ | | | |_
       \___| \_/ \___|_| |_|\__|
    */
    event ChainlinkCCIP__UtilsUpdated(address indexed _utils);
    event ChainlinkCCIP__RequestSentForCrossChainTransfer(
        address indexed _to, uint256 indexed _destinationChainSelector, uint256 _amount, bytes32 indexed _messageId
    );
    event ChainlinkCCIP__RequestSentForCrossChainDeployment(
        uint256 indexed _destinationChainSelector, bytes32 indexed _messageId
    );

    /*
           _        _                         _       _     _
       ___| |_ __ _| |_ ___  __   ____ _ _ __(_) __ _| |__ | | ___  ___
      / __| __/ _` | __/ _ \ \ \ / / _` | '__| |/ _` | '_ \| |/ _ \/ __|
      \__ \ || (_| | ||  __/  \ V / (_| | |  | | (_| | |_) | |  __/\__ \
      |___/\__\__,_|\__\___|   \_/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/
    */
    Utils public utils;

    Client.EVMExtraArgsV1 public ccipExtraArgs;

    address public immutable i_router;
    address public immutable i_factory;
    address public immutable i_link;

    modifier onlyWhitelisted(address _caller) {
        address factory = MainContract(payable(_caller)).i_factory();
        if (factory != i_factory) revert ChainlinkCCIP__NotWhitelisted();
        else _;
    }

    /**
     * @param _router The address of the Router contract
     * @param _factory The address of the Factory contract
     */
    constructor(address _router, address _factory, address _link) {
        i_router = _router;
        i_factory = _factory;
        i_link = _link;
    }

    /*
                 _                        _
        _____  _| |_ ___ _ __ _ __   __ _| |
       / _ \ \/ / __/ _ \ '__| '_ \ / _` | |
      |  __/>  <| ||  __/ |  | | | | (_| | |
       \___/_/\_\\__\___|_|  |_| |_|\__,_|_|
    */

    /**
     * This function is used to update the Utils contract address.
     * @param _utils The address of the Utils contract
     */
    function updateUtils(address _utils) external {
        if (_utils == address(0)) revert ChainlinkCCIP__InvalidAddress();
        emit ChainlinkCCIP__UtilsUpdated(_utils);
        utils = Utils(_utils);
    }

    function setCCIPExtraArgs(uint256 _gasLimit, bool _strict) external {
        ccipExtraArgs = Client.EVMExtraArgsV1({gasLimit: _gasLimit, strict: _strict});
    }

    /**
     * Function to send money to a recipient on a different chain.
     * @param _to Recipient address
     * @param _chainId Destination chain chainId
     * @param _amount The amount of Assets to send
     */
    function sendMoneyOnOtherChain(address _to, uint256 _chainId, uint256 _amount)
        external
        onlyWhitelisted(msg.sender)
    {
        bytes memory messageData = abi.encode(_to, _amount);
        uint64 destinationChainSelector = utils.getDestinationChainSelector(_chainId);
        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(msg.sender),
            data: messageData,
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: "",
            feeToken: address(0)
        });
        uint256 fee = IRouterClient(i_router).getFee(destinationChainSelector, message);
        if (fee > address(this).balance) revert ChainlinkCCIP__NotEnoughTokens();

        bytes32 messageId = IRouterClient(i_router).ccipSend{value: fee}(destinationChainSelector, message);

        emit ChainlinkCCIP__RequestSentForCrossChainTransfer(_to, destinationChainSelector, _amount, messageId);
    }

    function createMainContractOnDifferentChain(bytes32 _salt, uint256 _chainId) public {
        bytes memory messageData = abi.encode(_salt);
        uint64 destinationChainSelector = utils.getDestinationChainSelector(_chainId);
        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(msg.sender),
            data: messageData,
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: Client._argsToBytes(ccipExtraArgs),
            feeToken: address(0)
        });
        uint256 fee = IRouterClient(i_router).getFee(destinationChainSelector, message);
        if (fee > address(this).balance) revert ChainlinkCCIP__NotEnoughTokens();

        bytes32 messageId = IRouterClient(i_router).ccipSend{value: fee}(destinationChainSelector, message);

        emit ChainlinkCCIP__RequestSentForCrossChainDeployment(destinationChainSelector, messageId);
    }

    function withdraw(address _beneficiary) public {
        // Retrieve the balance of this contract
        uint256 amount = address(this).balance;

        // Revert if there is nothing to withdraw
        if (amount == 0) revert ChainlinkCCIP__NothingToWithdraw();

        // Attempt to send the funds, capturing the success status and discarding any return data
        (bool sent,) = _beneficiary.call{value: amount}("");

        // Revert if the send failed, with information about the attempted transfer
        if (!sent) revert ChainlinkCCIP__FailedToWithdrawEth(msg.sender, _beneficiary, amount);
    }

    function withdrawToken(address _token) public {
        // Retrieve the balance of this contract
        uint256 amount = IERC20(_token).balanceOf(address(this));

        // Revert if there is nothing to withdraw
        if (amount == 0) revert ChainlinkCCIP__NothingToWithdraw();

        IERC20(_token).transfer(msg.sender, amount);
    }

    receive() external payable {}

    fallback() external payable {}
}
