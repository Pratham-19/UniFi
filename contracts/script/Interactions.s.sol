// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Script} from "forge-std/Script.sol";

import {HelperConfig} from "./HelperConfig.s.sol";

import {BasicUSDC} from "../src/BasicUSDC.sol";
import {MainContract} from "../src/MainContract.sol";
import {MainContractDeployer} from "../src/MainContractDeployer.sol";
import {ChainlinkCCIP} from "../src/tools/ChainlinkCCIP.sol";
import {Utils} from "../src/Utils.sol";

contract SetToolIndexOnUtils is Script {
    function setToolIndex(address _utils, uint256 _chainId, uint256 _toolIndex) public {
        Utils utils = Utils(_utils);
        vm.startBroadcast();
        utils.setToolIndex(_chainId, _toolIndex);
        vm.stopBroadcast();
    }

    function setToolIndexUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address utils = helperConfig.getUtilsAddress();
        uint256[] memory supportedChains = helperConfig.getSupportedChainIds();
        uint256 chainsLength = supportedChains.length;

        for (uint256 i = 0; i < chainsLength; i++) {
            uint256 chainId = supportedChains[i];
            uint256 toolIndex = helperConfig.getToolsUsed(chainId);

            setToolIndex(utils, chainId, toolIndex);
        }
    }

    function run() public {
        setToolIndexUsingConfigs();
    }
}

contract SetChainSelectorOnUtils is Script {
    function setChainSelector(address _utils, uint256 _chainId, uint64 _selector) public {
        Utils utils = Utils(_utils);
        vm.startBroadcast();
        utils.setDestinationChainSelector(_chainId, _selector);
        vm.stopBroadcast();
    }

    function setChainSelectorUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address utils = helperConfig.getUtilsAddress();
        uint256[] memory supportedChains = helperConfig.getSupportedChainIds();
        uint256 chainsLength = supportedChains.length;

        for (uint256 i = 0; i < chainsLength; i++) {
            uint256 chainId = supportedChains[i];
            uint64 selector = helperConfig.getDestinationSelector(chainId);

            setChainSelector(utils, chainId, selector);
        }
    }

    function run() public {
        setChainSelectorUsingConfigs();
    }
}

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

contract SetUtilsOnDeployer is Script {
    function setUtilsDeployer(address payable _mainContractDeployer, address _utils) public {
        vm.startBroadcast();
        MainContractDeployer(_mainContractDeployer).setUtils(_utils);
        vm.stopBroadcast();
    }

    function setUtilsOnDeployerUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address mainContractDeployer = helperConfig.getMainContractDeployer();
        address _utils = helperConfig.getUtilsAddress();

        setUtilsDeployer(payable(mainContractDeployer), _utils);
    }

    function run() public {
        setUtilsOnDeployerUsingConfigs();
    }
}

contract SetUtilsOnMain is Script {
    function setUtilsMain(address payable _mainContract, address _utils) public {
        vm.startBroadcast();
        MainContract(_mainContract).setUtils(_utils);
        vm.stopBroadcast();
    }

    function setUtilsOnMainUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address mainContract = helperConfig.getMainContract();
        address _utils = helperConfig.getUtilsAddress();

        setUtilsMain(payable(mainContract), _utils);
    }

    function run() public {
        setUtilsOnMainUsingConfigs();
    }
}

/**
 * @notice MANUALLY CHANGGE THE `mainContractDeployer` ADDRESS
 */
contract StartWalletCreation is Script {
    bytes32 public salt = 0x7364736466617366617366647361667361000000000000000000000000000000;

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

contract SetUpTheDeployer is Script {
    function run() public {
        HelperConfig helperConfig = new HelperConfig();
        address ccip = helperConfig.getChainlinkCCIPAddress();
        address utils = helperConfig.getUtilsAddress();
        address hyperlaneAPI = helperConfig.getHyperlaneAPI();
        uint256[] memory supportedChains = helperConfig.getSupportedChainIds();

        MainContractDeployer mainContractDeployer =
            MainContractDeployer(payable(helperConfig.getMainContractDeployer()));

        vm.startBroadcast();
        mainContractDeployer.setChainlinkCCIP(payable(ccip));
        mainContractDeployer.setUtils(utils);
        mainContractDeployer.setHyperlaneMessageAPI(payable(hyperlaneAPI));
        mainContractDeployer.setSupportedChainIds(supportedChains);
        vm.stopBroadcast();
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
        (, address usdc,,) = helperConfig.activeNetworkConfig();

        address mainContract = helperConfig.getMainContract();

        uint256 usdcAmount = 10000 ether;

        mintUSDCForWallets(usdc, mainContract, usdcAmount);
    }

    function run() public {
        mintUSDCForWalletsUsingConfigs();
    }
}

contract SetCCIPForMainContract is Script {
    function setCCIPForMainContract(address _mainContract, address _ccip) public {
        MainContract mainContract = MainContract(payable(_mainContract));

        vm.startBroadcast();
        mainContract.setChainlinkCCIP(payable(_ccip));
        vm.stopBroadcast();
    }

    function setCCIPForMainContractUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address mainContract = helperConfig.getMainContract();
        address ccip = helperConfig.getChainlinkCCIPAddress();

        setCCIPForMainContract(mainContract, ccip);
    }

    function run() public {
        setCCIPForMainContractUsingConfigs();
    }
}

contract SendMoney is Script {
    function sendMoney(MainContract _mainContract, address _to, uint256[] memory _chainIds, uint256[] memory _amount)
        public
    {
        vm.startBroadcast();
        _mainContract.sendAssets(_to, _chainIds, _amount);
        vm.stopBroadcast();
    }

    function sendMoneyUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address _mainWallet = helperConfig.getMainContract();

        MainContract mainContract = MainContract(payable(_mainWallet));

        address _to = helperConfig.getUtilsAddress();

        (uint256[] memory _chainIds, uint256[] memory _amount) = helperConfig.getCCIPDataForTransfer();

        sendMoney(mainContract, _to, _chainIds, _amount);
    }

    function run() public {
        sendMoneyUsingConfigs();
    }
}
