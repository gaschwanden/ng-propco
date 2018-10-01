pragma solidity ^0.4.24;

contract User {
    address public _owner;
    bytes32 public _email;
    bytes32 public _password;

    modifier restricted() {
        require (
            msg.sender == _owner, 
            "Only owner can call this."
        ); 
        _;
    }

    event RegisteredUser(bytes32 email, address user);

    constructor(bytes32 email, bytes32 password) public {
        _owner = msg.sender;
        _email = email;
        _password = password; 
        emit RegisteredUser(_email, address(this));
    }

    function authenticate(bytes32 email, bytes32 password) public restricted view returns (bool)  {
        return _email == email && _password == password;
    }
}
