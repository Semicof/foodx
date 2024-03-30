package com.example.foodx_be.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String username) {
        super("The username '" + username + "' does not exits in our records");
    }
}
