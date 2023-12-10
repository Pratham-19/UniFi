// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {CREATE3} from "@solady/contracts/utils/Create3.sol";

import {HelperConfig} from "./HelperConfig.s.sol";
import {ChainlinkCCIP} from "../src/tools/ChainlinkCCIP.sol";

contract DeployChainlinkCCIP is Script {
    bytes32 public constant SALT = 0x726f6d657468696e67206e657700000000000000000000000000000000000000;

    function deployChainlinkCCIP(bytes memory _bytecode) public {
        vm.startBroadcast();
        address ccip = CREATE3.deploy(SALT, _bytecode, 0);
        vm.stopBroadcast();
        console.log("ChainlinkCCIP Address: %s", address(ccip));
    }

    function deployChainlinkCCIPUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        (address router,, address link,) = helperConfig.activeNetworkConfig();
        address factory = helperConfig.getMainContractDeployer();
        bytes memory bytecode = abi.encodePacked(
            type(ChainlinkCCIP).creationCode,
            abi.encode(router, factory, link) // Encoding constructor parameters
        );
        deployChainlinkCCIP(bytecode);
    }

    function run() public {
        deployChainlinkCCIPUsingConfigs();
    }
}
