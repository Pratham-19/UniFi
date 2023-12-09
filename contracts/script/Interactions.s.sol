// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Script} from "forge-std/Script.sol";

import {HelperConfig} from "./HelperConfig.s.sol";

import {BasicUSDC} from "../src/BasicUSDC.sol";
import {MainContract} from "../src/MainContract.sol";
import {MainContractDeployer} from "../src/MainContractDeployer.sol";

contract SetChainlinkCCIPOnDeployer is Script {
    function setCCIPContractAddressOnMainContractDeployer(address payable _mainContractDeployer, address _ccip)
        public
    {
        MainContractDeployer mainContractDeployer = MainContractDeployer(_mainContractDeployer);

        vm.startBroadcast();
        mainContractDeployer.setChainlinkCCIP(_ccip);
        vm.stopBroadcast();
    }

    function setCCIPContractAddressOnMainContractDeployerUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address payable mainContractDeployer = helperConfig.getMainContractDeployer();
        address ccip = helperConfig.getChainlinkCCIPAddress();

        setCCIPContractAddressOnMainContractDeployer(mainContractDeployer, ccip);
    }

    function run() public {
        setCCIPContractAddressOnMainContractDeployerUsingConfigs();
    }
}

/**
 * @notice MANUALLY CHANGGE THE `mainContractDeployer` ADDRESS
 */
contract StartWalletCreation is Script {
    bytes32 public salt = 0x736572696f75732474657374696e673200000000000000000000000000000000;

    function startWalletCreation(
        address payable _mainContractDeployer,
        MainContractDeployer.CCIPDataForWalletCreation[] memory _ccipData
    ) public {
        MainContractDeployer mainContractDeployer = MainContractDeployer(_mainContractDeployer);

        vm.startBroadcast();
        mainContractDeployer.startWalletCreation(_ccipData, salt);
        vm.stopBroadcast();
    }

    function startWalletCreationUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        MainContractDeployer.CCIPDataForWalletCreation[] memory ccipData = helperConfig.getCCIPDataForWalletCreation();

        address payable mainContractDeployer = helperConfig.getMainContractDeployer();

        startWalletCreation(mainContractDeployer, ccipData);
    }

    function run() public {
        startWalletCreationUsingConfigs();
    }
}

/**
 * @notice MANUALLY CHANGGE THE `mainContract` ADDRESS
 */
contract MintUSDCForWallets is Script {
    function mintUSDCForWallets(address _usdc, address _mainContract, uint256 _amount) public {
        BasicUSDC usdc = BasicUSDC(_usdc);

        vm.startBroadcast();
        usdc.mint(_mainContract, _amount);
        vm.stopBroadcast();
    }

    function mintUSDCForWalletsUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        (, address usdc) = helperConfig.activeNetworkConfig();

        address mainContract = 0x226f918823d9F4A2625a3e6367FCd41E924ad97b;

        uint256 usdcAmount = 10000 ether;

        mintUSDCForWallets(usdc, mainContract, usdcAmount);
    }

    function run() public {
        mintUSDCForWalletsUsingConfigs();
    }
}
