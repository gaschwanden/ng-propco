pragma solidity ^0.4.24;

import "./Owned.sol";

contract UserRegistry is Owned{
    struct User{
        bytes32 email;
        bytes32 password;
        bool exists;
    }

    address owner;
    mapping(bytes32 => User) public registeredUsers;

    constructor() public {
        owner = msg.sender;
    }

    function register(bytes32 pEmail, bytes32 pPassword) public onlyByOwner returns (bool) {
        if(exists(pEmail)) revert("Email already registered!"); 
        registeredUsers[pEmail] = User(pEmail, pPassword, true);
        return true; 
    }

    function exists(bytes32 pEmail) public view returns (bool) {
        return registeredUsers[pEmail].exists;
    }

    function authenticate(bytes32 pEmail, bytes32 pPassword) public onlyByOwner view returns (bool) {
        return exists(pEmail) && registeredUsers[pEmail].password == pPassword;
    }
}
