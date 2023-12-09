// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Script} from "forge-std/Script.sol";
import {DevOpsTools} from "foundry-devops/src/DevOpsTools.sol";

import {MainContractDeployer} from "../src/MainContractDeployer.sol";
import {MainContract} from "../src/MainContract.sol";

contract HelperConfig is Script {
    error HelperConfig__InvalidChainId();

    struct NetworkConfig {
        address router;
        address usdc;
        address link;
    }

    NetworkConfig public activeNetworkConfig;

    uint64 public constant SEPOLIA_DESTINATION_SELECTOR = 16015286601757825753;
    uint64 public constant MUMBAI_DESTINATION_SELECTOR = 12532609583862916517;
    uint256 public constant CCIP_GAS_LIMIT = 2_000_000;
    bool public constant CCIP_STRICT = false;

    uint256[] public supportedChainIds = [80001, 11155111];
    uint256[] public chainsToTransferFundsOn = [80001, 11155111];
    uint256[] public amountsToTransfer = [10 ether, 10 ether];

    constructor() {
        if (block.chainid == 11155111) {
            activeNetworkConfig = getSepoliaConfigs();
        } else if (block.chainid == 80001) {
            activeNetworkConfig = getMumbaiConfigs();
        } else {
            revert HelperConfig__InvalidChainId();
        }
    }

    function getSupportedChainIds() external view returns (uint256[] memory) {
        return supportedChainIds;
    }

    function getToolsUsed(uint256 _chainId) external pure returns (uint256 toolIndex) {
        if (_chainId == 11155111) {
            return 0;
        } else if (_chainId == 80001) {
            return 0;
        } else {
            revert HelperConfig__InvalidChainId();
        }
    }

    function getCCIPDataForTransfer() public view returns (uint256[] memory _chainIds, uint256[] memory _amounts) {
        return (chainsToTransferFundsOn, amountsToTransfer);
    }

    function getLatestTreasuryContract() external pure returns (address) {
        // return DevOpsTools.get_most_recent_deployment("Treasury", block.chainid);
        return 0x39d2220958054404bebDca40bAE70b6e16d615C1;
    }

    function getMainContractDeployer() external pure returns (address payable) {
        return payable(0x89CacFEa8Ac86f75ec5c2e2CE1194a95324138D0);
    }

    function getChainlinkCCIPAddress() external pure returns (address) {
        return 0x7746B5e3232C514be10e7D47De9b579Df65BB23d;
    }

    function getUtilsAddress() external pure returns (address) {
        return 0xF981f02EDAb3E2EAe03746145b64C85B9eC14Aad;
    }

    function getMainContract() external pure returns (address) {
        return 0x0614267E77EEe72236A91e8e35FbcDF631Abf82d;
    }

    function getSepoliaConfigs() internal pure returns (NetworkConfig memory) {
        return NetworkConfig({
            router: 0xD0daae2231E9CB96b94C8512223533293C3693Bf,
            usdc: 0xf80E7ce8166b91b110FE022326AAdDf7085Bf0B9,
            link: 0x779877A7B0D9E8603169DdbD7836e478b4624789
        });
    }

    function getMumbaiConfigs() internal pure returns (NetworkConfig memory) {
        return NetworkConfig({
            router: 0x70499c328e1E2a3c41108bd3730F6670a44595D1,
            usdc: 0xf80E7ce8166b91b110FE022326AAdDf7085Bf0B9,
            link: 0x326C977E6efc84E512bB9C30f76E30c160eD06FB
        });
    }
}
