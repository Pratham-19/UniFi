// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract Utils {
    mapping(uint256 chainId => uint64 destinationSelector) public chainIdToDestinationSelector;
    mapping(uint256 chainId => uint256 toolIndex) public chainIdToToolIndex;

    function getDestinationChainSelector(uint256 chainId) public view returns (uint64) {
        return chainIdToDestinationSelector[chainId];
    }

    function getToolIndex(uint256 chainId) public view returns (uint256) {
        return chainIdToToolIndex[chainId];
    }

    function setDestinationChainSelector(uint256 chainId, uint64 selector) public {
        chainIdToDestinationSelector[chainId] = selector;
    }

    /**
     *
     * @param chainId The chainId of the destination chain
     * @param index 0 for ChainlinkCCIP, 1 for HyperlaneMessageAPI
     */
    function setToolIndex(uint256 chainId, uint256 index) public {
        chainIdToToolIndex[chainId] = index;
    }
}
