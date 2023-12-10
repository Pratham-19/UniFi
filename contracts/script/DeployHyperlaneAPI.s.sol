//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Script} from "forge-std/Script.sol";
import {HyperlaneMessageAPI} from "../src/tools/HyperlaneMessageAPI.sol";
import {HelperConfig} from "./HelperConfig.s.sol";
import {CREATE3} from "@solady/contracts/utils/Create3.sol";

contract DeployHyperlaneAPI is Script {
    bytes32 public constant SALT = 0x726f6d657468696e67206e887700000000000000000000000000000000000000;

    function deployHyperlaneAPI(bytes memory _bytecode) public {
        vm.startBroadcast();
        address hyperlaneAPI = CREATE3.deploy(SALT, _bytecode, 0);
        vm.stopBroadcast();
    }

    function deployHyperlaneAPIWithConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        (,,, address mailbox) = helperConfig.activeNetworkConfig();

        bytes memory bytecode = abi.encodePacked(
            type(HyperlaneMessageAPI).creationCode,
            abi.encode(mailbox) // Encoding constructor parameters
        );

        deployHyperlaneAPI(bytecode);
    }

    function run() public {
        deployHyperlaneAPIWithConfigs();
    }
}
