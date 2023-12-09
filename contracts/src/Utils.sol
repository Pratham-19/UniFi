// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract Utils {
    mapping(uint256 chainId => uint64 destinationSelector) public chainIdToDestinationSelector;

    function getDestinationChainSelector(uint256 chainId) public view returns (uint64) {
        return chainIdToDestinationSelector[chainId];
    }

    function setDestinationChainSelector(uint256 chainId, uint64 selector) public {
        chainIdToDestinationSelector[chainId] = selector;
    }
}
