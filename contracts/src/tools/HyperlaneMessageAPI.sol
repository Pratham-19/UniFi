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

import "@hyperlane-xyz/core/contracts/interfaces/IMailbox.sol";

contract HyperlaneMessageAPI {
    error HyperlaneMessageAPI__InsufficientBalance();

    event HyperlaneMessageAPI__MessageSent(address indexed _to, uint256 indexed _chainId, uint256 indexed _amount);

    address public immutable i_mailbox;

    constructor(address _mailbox) {
        i_mailbox = _mailbox;
    }

    function createMainContractOnDifferentChain(bytes32 _salt, uint256 _chainId) public {
        uint32 chainId = uint32(_chainId);
        bytes32 receiverAddress = addressToBytes32(msg.sender);
        bytes memory message = abi.encode(_salt);

        uint256 quote = IMailbox(i_mailbox).quoteDispatch(chainId, receiverAddress, message);
        if (quote > address(this).balance) revert HyperlaneMessageAPI__InsufficientBalance();

        emit HyperlaneMessageAPI__MessageSent(msg.sender, _chainId, 0);
        IMailbox(i_mailbox).dispatch{value: quote}(chainId, receiverAddress, message);
    }

    function sendMoneyOnOtherChain(address _to, uint256 _chainId, uint256 _amount) external {
        uint32 chainId = uint32(_chainId);
        bytes32 receiverAddress = addressToBytes32(msg.sender);
        bytes memory message = abi.encode(_to, _amount);

        uint256 quote = IMailbox(i_mailbox).quoteDispatch(chainId, receiverAddress, message);
        if (quote > address(this).balance) revert HyperlaneMessageAPI__InsufficientBalance();

        emit HyperlaneMessageAPI__MessageSent(_to, _chainId, _amount);
        IMailbox(i_mailbox).dispatch{value: quote}(chainId, receiverAddress, message);
    }

    // converts address to bytes32
    function addressToBytes32(address _addr) internal pure returns (bytes32) {
        return bytes32(uint256(uint160(_addr)));
    }
}
