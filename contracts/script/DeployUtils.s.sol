// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {Utils} from "../src/Utils.sol";

contract DeployUtils is Script {
    bytes32 public constant SALT = 0x556e794669000000000000000000000000000000000000000000000000000000;

    function run() public {
        vm.startBroadcast();
        Utils utils = new Utils{salt:SALT}();
        vm.stopBroadcast();
        console.log("Utils Address: %s", address(utils));
    }
}
