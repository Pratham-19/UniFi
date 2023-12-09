// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BasicUSDC is ERC20 {
    constructor(uint256 initialSupply, address _to) ERC20("Basic USDC", "USDC") {
        _mint(_to, initialSupply);
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
