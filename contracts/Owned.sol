pragma solidity ^0.4.24;

contract Owned {
    address public _owner;

    // modifiers
    modifier onlyByOwner() {
        require (
            msg.sender == _owner, 
            "Only owner can call this."
        ); 
        _;
    }
}
