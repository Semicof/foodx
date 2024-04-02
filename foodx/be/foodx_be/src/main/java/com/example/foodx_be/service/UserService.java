package com.example.foodx_be.service;


import com.example.foodx_be.dto.RegisterCommand;
import com.example.foodx_be.dto.UserDTO;
import com.example.foodx_be.enity.User;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.UUID;

public interface UserService {
    User saveUser(RegisterCommand registerCommand);
    User getUser(String username);
    UserDTO getUserByID(UUID id);
    Page<UserDTO> getUsersByName(int pageNo, int limit, String name);
    UserDTO updateUser(UserDTO userDTO);

}
