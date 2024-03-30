package com.example.foodx_be.service;


import com.example.foodx_be.dto.RegisterCommand;
import com.example.foodx_be.enity.User;

import java.util.UUID;

public interface UserService {
    User saveUser(RegisterCommand registerCommand);
    User getUser(String username);

}
