// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {BasicUSDC} from "../src/BasicUSDC.sol";

contract DeployBasicUSDC is Script {
    bytes32 public constant SALT = 0x556e794669000000000000000000000000000000000000000000000000000000;
    uint256 public constant INITIAL_SUPPLY = 1000e18;
    address public constant TO = 0x39d2220958054404bebDca40bAE70b6e16d615C1;

    function run() public {
        vm.startBroadcast();
        BasicUSDC usdc = new BasicUSDC{salt:SALT}(INITIAL_SUPPLY, TO);
        vm.stopBroadcast();
        console.log(address(usdc));
    }
}
