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

import {CREATE3} from "@solady/contracts/utils/Create3.sol";

import {MainContract} from "./MainContract.sol";
import {ChainlinkCCIP} from "./tools/ChainlinkCCIP.sol";

import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";

/**
 * @title MainContractDeployer
 * @author Megabyte
 * @notice Factory Contract to deploy MainContract on all the supported chains.
 */
contract MainContractDeployer is CCIPReceiver {
    /*
        ___ _ __ _ __ ___  _ __ ___
       / _ \ '__| '__/ _ \| '__/ __|
      |  __/ |  | | | (_) | |  \__ \
       \___|_|  |_|  \___/|_|  |___/
    */
    error MainContractDeployer__EmptyArray();
    error MainContractDeployer__InvalidAddress();

    /*
                            _
        _____   _____ _ __ | |_ ___
       / _ \ \ / / _ \ '_ \| __/ __|
      |  __/\ V /  __/ | | | |_\__ \
       \___| \_/ \___|_| |_|\__|___/
    */
    event MainContractDeployer__UtilsUpdated(address indexed _utils);
    event MainContractDeployer__RequestReceivedForCrossChainDeployment(
        uint64 indexed sourceChainSelector, bytes32 indexed messageId
    );
    event MainContractDeployer__RequestSentForCrossChainDeployment(
        uint64 indexed destinationChainSelector, bytes32 indexed messageId
    );
    event MainContractDeployer__MainContractCreatedWithMessageId(
        address indexed mainContractAddress, bytes32 indexed messageId
    );
    event MainContractDeployer__MainContractCreated(address indexed mainContractAddress);

    /*
       _                          _           _                 _   _
      | |_ _   _ _ __   ___    __| | ___  ___| | __ _ _ __ __ _| |_(_) ___  _ __  ___
      | __| | | | '_ \ / _ \  / _` |/ _ \/ __| |/ _` | '__/ _` | __| |/ _ \| '_ \/ __|
      | |_| |_| | |_) |  __/ | (_| |  __/ (__| | (_| | | | (_| | |_| | (_) | | | \__ \
       \__|\__, | .__/ \___|  \__,_|\___|\___|_|\__,_|_|  \__,_|\__|_|\___/|_| |_|___/
           |___/|_|
    */

    enum TOOL {
        CHAINLINK,
        HYPERLANE
    }

    struct CCIPDataForWalletCreation {
        uint256 chainId;
        TOOL toolUsed;
    }

    /*
           _        _                         _       _     _
       ___| |_ __ _| |_ ___  __   ____ _ _ __(_) __ _| |__ | | ___  ___
      / __| __/ _` | __/ _ \ \ \ / / _` | '__| |/ _` | '_ \| |/ _ \/ __|
      \__ \ || (_| | ||  __/  \ V / (_| | |  | | (_| | |_) | |  __/\__ \
      |___/\__\__,_|\__\___|   \_/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/
    */

    address public s_chainlinkCCIP;
    /**
     * @notice This mapping stores the MainContract address for each wallet address.
     */
    mapping(address wallet => address mainContract) public s_mainContracts;

    // Chainlink CCIP Router address
    address public immutable i__router;
    // USDC address
    address public immutable i__usdc;
    // Treasury address
    address public immutable i__treasury;

    /**
     *
     * @param _router The Chainlink CCIP Router address
     * @param _usdc The USDC address
     */
    constructor(address _router, address _usdc, address _treasury) CCIPReceiver(_router) {
        i__router = _router;
        i__usdc = _usdc;
        i__treasury = _treasury;
    }

    /*
                 _                        _
        _____  _| |_ ___ _ __ _ __   __ _| |
       / _ \ \/ / __/ _ \ '__| '_ \ / _` | |
      |  __/>  <| ||  __/ |  | | | | (_| | |
       \___/_/\_\\__\___|_|  |_| |_|\__,_|_|
    */

    function setChainlinkCCIP(address _chainlinkCCIP) external {
        if (_chainlinkCCIP == address(0)) revert MainContractDeployer__InvalidAddress();
        else s_chainlinkCCIP = _chainlinkCCIP;
    }

    /**
     * This function deploys the MainContract on multiple chains.
     * @param _ccipData The chain IDs of the destination chains
     * @param _salt The salt to use for the CREATE3 call
     * @notice The chainIds will contain the chain ID of the chain on which the MainContractDeployer is deployed at 0 index.
     */
    function startWalletCreation(CCIPDataForWalletCreation[] memory _ccipData, bytes32 _salt) external {
        uint256 length = _ccipData.length;
        if (length < 1) revert MainContractDeployer__EmptyArray();

        for (uint256 i = 0; i < length;) {
            uint256 chainId = _ccipData[i].chainId;
            TOOL toolUsed = _ccipData[i].toolUsed;
            if (chainId == block.chainid) {
                _createMainContractOnSameChain(_salt);
            } else if (toolUsed == TOOL.CHAINLINK) {
                _createMainContractOnDifferentChainUsingChainlink(_salt, chainId);
            }
            unchecked {
                i++;
            }
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

    /**
     * This function is called by the CCIP router when a cross-chain message is received.
     * @param message The CCIP message
     */
    function _ccipReceive(Client.Any2EVMMessage memory message) internal override {
        (bytes32 _salt) = abi.decode(message.data, (bytes32));
        bytes32 _messageId = message.messageId;
        uint64 sourceChainSelector = message.sourceChainSelector;

        emit MainContractDeployer__RequestReceivedForCrossChainDeployment(sourceChainSelector, _messageId);

        _createMainContractWithMessageId(_salt, _messageId);
    }

    /**
     * This function deploys the MainContract on the same chain as the MainContractDeployer.
     * @param _salt The salt to use for the CREATE3 call
     */
    function _createMainContractOnSameChain(bytes32 _salt) internal {
        _createMainContract(_salt);
    }

    /**
     * This function deploys the MainContract on a different chain than the MainContractDeployer.
     * @param _salt The salt to use for the CREATE3 call
     * @param _chainId Chain ID of the destination chain
     */
    function _createMainContractOnDifferentChainUsingChainlink(bytes32 _salt, uint256 _chainId) internal {
        ChainlinkCCIP(s_chainlinkCCIP).createMainContractOnDifferentChain(_salt, _chainId);
    }

    /**
     * This function deploys the MainContract on the same chain as the MainContractDeployer.
     * @param _salt The salt to use for the CREATE3 call
     */
    function _createMainContract(bytes32 _salt) internal {
        bytes memory bytecode = abi.encodePacked(
            type(MainContract).creationCode,
            abi.encode(i__router, i__usdc, i__treasury) // Encoding constructor parameters
        );

        address mainContractAddress = CREATE3.deploy(_salt, bytecode, 0);

        emit MainContractDeployer__MainContractCreated(mainContractAddress);

        s_mainContracts[msg.sender] = address(mainContractAddress);
    }

    /**
     * this function deploys the MainContract on a different chain than the MainContractDeployer.
     * @param _salt This is the salt to use for the CREATE3 call
     * @param _messageId This is the message ID of the cross-chain message
     */
    function _createMainContractWithMessageId(bytes32 _salt, bytes32 _messageId) internal {
        bytes memory bytecode = abi.encodePacked(
            type(MainContract).creationCode,
            abi.encode(i__router, i__usdc, i__treasury) // Encoding constructor parameters
        );

        address mainContractAddress = CREATE3.deploy(_salt, bytecode, 0);

        emit MainContractDeployer__MainContractCreatedWithMessageId(mainContractAddress, _messageId);

        s_mainContracts[msg.sender] = address(mainContractAddress);
    }
}
