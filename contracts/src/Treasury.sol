// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {MainContract} from "./MainContract.sol";

/**
 * @title Treasury
 * @author Megabyte
 * @notice This contract is used to store funds for the application. This contract can only be accessed by the contracts deployed using a specific factory.
 */
contract Treasury {
    address public immutable i_owner;
    address public immutable i_factory;

    constructor(address _factory, address _owner) {
        i_owner = _owner;
        i_factory = _factory;
    }

    modifier onlyWhitelisted() {
        address factory = MainContract(payable(msg.sender)).i_factory();
        require(factory == i_factory || msg.sender == i_owner, "NW");
        _;
    }

    receive() external payable {}

    function withdrawEther(uint256 _amount) external onlyWhitelisted {
        require(address(this).balance >= _amount, "IB");
        (bool success,) = payable(msg.sender).call{value: _amount}("");
        require(success, "TF");
    }

    function handleTokens(address _token, uint256 _amount, bool isDeposit) internal {
        IERC20 token = IERC20(_token);
        if (isDeposit) {
            token.transferFrom(msg.sender, address(this), _amount);
        } else {
            require(token.balanceOf(address(this)) >= _amount, "IB");
            token.transfer(msg.sender, _amount);
        }
    }

    function depositTokens(address _token, uint256 _amount) external onlyWhitelisted {
        handleTokens(_token, _amount, true);
    }

    function withdrawTokens(address _token, uint256 _amount) external onlyWhitelisted {
        handleTokens(_token, _amount, false);
    }

    function sendERC20(address _token, address _to, uint256 _amount) external onlyWhitelisted {
        IERC20 token = IERC20(_token);
        require(token.balanceOf(address(this)) >= _amount, "IB");
        token.transfer(_to, _amount);
    }
}
