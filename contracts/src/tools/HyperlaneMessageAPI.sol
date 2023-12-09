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
    address public immutable i_mailbox;

    constructor(address _mailbox) {
        i_mailbox = _mailbox;
    }

    function sendMoneyOnOtherChain() external {}
}
