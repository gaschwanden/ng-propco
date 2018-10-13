pragma solidity ^0.4.24;

import "./Owned.sol";

contract Asset is Owned{
    address owner;
    bytes32 location;
    uint value;
    bytes32 category;

    constructor(bytes32 pLocation, uint pValue, bytes32 pCategory) public {
        owner = msg.sender;
        location = pLocation;
        value = pValue;
        category = pCategory;
    }
}
