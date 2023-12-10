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
        address mailbox;
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
        return payable(0x90fE2D28BA67E77Cb336D40dE6B36578A5D943fb);
    }

    function getChainlinkCCIPAddress() external pure returns (address) {
        return 0x7746B5e3232C514be10e7D47De9b579Df65BB23d;
    }

    function getUtilsAddress() external pure returns (address) {
        return 0x98A266860D7AE38B41C5834BE62EC195CceAC119;
    }

    function getMainContract() external pure returns (address) {
        return 0xD008E0421627D214962E2d68eD55709A7624d540;
    }

    function getDestinationSelector(uint256 _chainId) external pure returns (uint64) {
        if (_chainId == 11155111) {
            return SEPOLIA_DESTINATION_SELECTOR;
        } else if (_chainId == 80001) {
            return MUMBAI_DESTINATION_SELECTOR;
        } else {
            revert HelperConfig__InvalidChainId();
        }
    }

    function getHyperlaneAPI() external pure returns (address) {
        return 0x8B2E48150D4dB6B3Af67740E89D26Cc488eac2Ff;
    }

    function getSepoliaConfigs() internal pure returns (NetworkConfig memory) {
        return NetworkConfig({
            router: 0xD0daae2231E9CB96b94C8512223533293C3693Bf,
            usdc: 0xf80E7ce8166b91b110FE022326AAdDf7085Bf0B9,
            link: 0x779877A7B0D9E8603169DdbD7836e478b4624789,
            mailbox: 0xfFAEF09B3cd11D9b20d1a19bECca54EEC2884766
        });
    }

    function getMumbaiConfigs() internal pure returns (NetworkConfig memory) {
        return NetworkConfig({
            router: 0x70499c328e1E2a3c41108bd3730F6670a44595D1,
            usdc: 0xf80E7ce8166b91b110FE022326AAdDf7085Bf0B9,
            link: 0x326C977E6efc84E512bB9C30f76E30c160eD06FB,
            mailbox: 0x2d1889fe5B092CD988972261434F7E5f26041115
        });
    }

    function getFujiConfigs() internal pure returns (NetworkConfig memory) {
        return NetworkConfig({
            router: 0xF694E193200268f9a4868e4Aa017A0118C9a8177,
            usdc: 0xf80E7ce8166b91b110FE022326AAdDf7085Bf0B9,
            link: 0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846,
            mailbox: 0x5b6CFf85442B851A8e6eaBd2A4E4507B5135B3B0
        });
    }

    // function getScrollConfigs() internal pure returns (NetworkConfig memory) {
    //     return NetworkConfig({
    //         router:
    //     });
    // }
}

// sepolia, mumbai, scroll, arb, celo,
