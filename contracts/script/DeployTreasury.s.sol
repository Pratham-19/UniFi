// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";

import {Treasury} from "../src/Treasury.sol";

contract DeployTreasury is Script {
    // "testing"
    bytes32 public constant SALT = 0x74657374696e6700000000000000000000000000000000000000000000000000;
    address public immutable i_owner = 0x1Cb30cb181D7854F91c2410BD037E6F42130e860;

    // function deployTreasuryWithConfigs() public {}

    function run() public {
        vm.startBroadcast();
        Treasury treasury = new Treasury{salt:SALT}(
            address(this),
            i_owner
        );
        vm.stopBroadcast();
        console.log("Treasury Address: %s", address(treasury));
    }
}
