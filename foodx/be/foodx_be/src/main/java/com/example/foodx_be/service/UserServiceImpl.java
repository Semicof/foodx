package com.example.foodx_be.service;

import com.example.foodx_be.dto.RegisterCommand;
import com.example.foodx_be.enity.User;
import com.example.foodx_be.exception.PasswordMissMatchException;
import com.example.foodx_be.exception.UserExistedException;
import com.example.foodx_be.exception.UserNotFoundException;
import com.example.foodx_be.repository.UserRepository;
import com.example.foodx_be.ulti.Role;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{
    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Override
    public User saveUser(RegisterCommand registerCommand) {

        Optional<User> userRegister = userRepository.findByUsername(registerCommand.getUsername());
        if(userRegister.isPresent()){
            throw new UserExistedException(registerCommand.getUsername());
        }
        User user = convertToUser(registerCommand);
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User getUser(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return unwrapUser(user, username);
    }

    static User unwrapUser(Optional<User> entity, String username) {
        if (entity.isPresent()) return entity.get();
        else throw new UserNotFoundException(username);
    }

    private User convertToUser(RegisterCommand userDTO) {
        User user = User.builder()
                .username(userDTO.getUsername())
                .password(userDTO.getPassword())
                .name(userDTO.getName())
                .phoneNumber(userDTO.getPhoneNumber())
                .email(userDTO.getEmail())
                .ward(userDTO.getWard())
                .district(userDTO.getDistrict())
                .city(userDTO.getCity())
                .build();
        return user;
    }
}
