pragma solidity ^0.4.24;

import "./Owned.sol";

contract Reit is Owned{
    address owner;
    address[] public assets;
    uint public revenue;
    uint public expense;

    constructor() public {
        owner = msg.sender;
    }

    function addAsset(address pAsset) public onlyByOwner {
        assets.push(pAsset) - 1; 
    }

    function getAssetCount() public view returns (uint) {
        return assets.length;
    }

    function addExpense(uint pExpense) public onlyByOwner {
        expense += pExpense;
    }

    function addProfits(uint pProfit) public onlyByOwner {
        revenue += pProfit;
    }
}
