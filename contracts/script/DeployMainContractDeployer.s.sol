//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {CREATE3} from "@solady/contracts/utils/Create3.sol";
import {DevOpsTools} from "foundry-devops/src/DevOpsTools.sol";

import {HelperConfig} from "./HelperConfig.s.sol";

import {MainContractDeployer} from "../src/MainContractDeployer.sol";

contract DeployMainContractDeployer is Script {
    bytes32 public constant SALT = 0x736f6d657476476e67698e657700000000000000000000000000000000000000;

    function deployMainContractDeployer(bytes memory _bytecode) public {
        vm.startBroadcast();
        address mainContractDeployer = CREATE3.deploy(SALT, _bytecode, 0);
        vm.stopBroadcast();
        console.log("MainContractDeployer Address: %s", address(mainContractDeployer));
    }

    function deployMainContractDeployerWithConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        (address router, address usdc,,) = helperConfig.activeNetworkConfig();
        address treasury = helperConfig.getLatestTreasuryContract();

        bytes memory bytecode = abi.encodePacked(
            type(MainContractDeployer).creationCode,
            abi.encode(router, usdc, treasury) // Encoding constructor parameters
        );

        deployMainContractDeployer(bytecode);
    }

    function run() public {
        deployMainContractDeployerWithConfigs();
    }
}
