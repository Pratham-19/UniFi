// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Script} from "forge-std/Script.sol";

import {HelperConfig} from "./HelperConfig.s.sol";

import {BasicUSDC} from "../src/BasicUSDC.sol";
import {MainContract} from "../src/MainContract.sol";
import {MainContractDeployer} from "../src/MainContractDeployer.sol";
import {ChainlinkCCIP} from "../src/tools/ChainlinkCCIP.sol";

contract SetUtilsOnCCIP is Script {
    function setUtilsCCIP(address _ccip, address _utils) public {
        ChainlinkCCIP ccip = ChainlinkCCIP(payable(_ccip));

        vm.startBroadcast();
        ccip.updateUtils(_utils);
        vm.stopBroadcast();
    }

    function setUtilsCCIPUsingConigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address ccip = helperConfig.getChainlinkCCIPAddress();
        address utils = helperConfig.getUtilsAddress();

        setUtilsCCIP(ccip, utils);
    }

    function run() public {
        setUtilsCCIPUsingConigs();
    }
}

contract SetCCIPGasLimit is Script {
    function setCCIPGasLimit(ChainlinkCCIP _ccip, uint256 _gasLimit, bool _strict) public {
        vm.startBroadcast();
        _ccip.setCCIPExtraArgs(_gasLimit, _strict);
        vm.stopBroadcast();
    }

    function setCCIPGasLimitUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address ccip = helperConfig.getChainlinkCCIPAddress();

        ChainlinkCCIP ccipContract = ChainlinkCCIP(payable(ccip));

        uint256 gasLimit = helperConfig.CCIP_GAS_LIMIT();
        bool strict = helperConfig.CCIP_STRICT();
        setCCIPGasLimit(ccipContract, gasLimit, strict);
    }

    function run() public {
        setCCIPGasLimitUsingConfigs();
    }
}

contract SetChainlinkCCIPOnDeployer is Script {
    function setCCIPContractAddressOnMainContractDeployer(address payable _mainContractDeployer, address _ccip)
        public
    {
        MainContractDeployer mainContractDeployer = MainContractDeployer(_mainContractDeployer);

        vm.startBroadcast();
        mainContractDeployer.setChainlinkCCIP(payable(_ccip));
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

contract SetToolForChainId is Script {
    function setToolForChainId(address payable _mainContractDeployer, uint256 _chainId, uint256 _tool) public {
        vm.startBroadcast();
        MainContractDeployer(_mainContractDeployer).setToolForChainId(_chainId, _tool);
        vm.stopBroadcast();
    }

    function setToolForChainIdUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address mainContractDeployer = helperConfig.getMainContractDeployer();
        uint256[] memory supportedChainIds = helperConfig.getSupportedChainIds();

        uint256 length = supportedChainIds.length;
        for (uint256 i = 0; i < length;) {
            uint256 chainId = supportedChainIds[i];
            uint256 tool = helperConfig.getToolsUsed(chainId);
            setToolForChainId(payable(mainContractDeployer), chainId, tool);
            unchecked {
                i++;
            }
        }
    }

    function run() public {
        setToolForChainIdUsingConfigs();
    }
}

/**
 * @notice MANUALLY CHANGGE THE `mainContractDeployer` ADDRESS
 */
contract StartWalletCreation is Script {
    bytes32 public salt = 0x736f6d657468696e67206e657700000000000000000000000000000000000000;

    function startWalletCreation(address payable _mainContractDeployer) public {
        MainContractDeployer mainContractDeployer = MainContractDeployer(_mainContractDeployer);

        vm.startBroadcast();
        mainContractDeployer.startWalletCreation(salt);
        vm.stopBroadcast();
    }

    function startWalletCreationUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();

        address payable mainContractDeployer = helperConfig.getMainContractDeployer();

        startWalletCreation(mainContractDeployer);
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
        (, address usdc,) = helperConfig.activeNetworkConfig();

        address mainContract = 0x226f918823d9F4A2625a3e6367FCd41E924ad97b;

        uint256 usdcAmount = 10000 ether;

        mintUSDCForWallets(usdc, mainContract, usdcAmount);
    }

    function run() public {
        mintUSDCForWalletsUsingConfigs();
    }
}