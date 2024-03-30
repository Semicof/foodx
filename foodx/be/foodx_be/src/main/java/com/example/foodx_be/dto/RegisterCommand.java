package com.example.foodx_be.dto;

import com.example.foodx_be.validation.PasswordMatches;
import com.example.foodx_be.validation.ValidName;
import com.example.foodx_be.validation.ValidUsername;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@PasswordMatches
public class RegisterCommand {
    @ValidUsername
    @NonNull
    private String username;

    @NotBlank(message =  "Password cannot be empty")
    @NonNull
    private String password;

    @NotBlank(message =  "Repeat Password cannot be empty")
    @NonNull
    private String repeatPassword;

    @ValidName
    @NonNull
    private String name;

    @NotBlank(message =  "Phone cannot be empty")
    @NonNull
    private String phoneNumber;

    @Email(message = "Email is not valid", regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
    @NotBlank(message = "Email cannot be empty")
    private String email;

    @NotBlank(message =  "Ward cannot be empty")
    @NonNull
    private String ward;

    @NotBlank(message =  "District cannot be empty")
    @NonNull
    private String district;

    @NotBlank(message =  "City cannot be empty")
    @NonNull
    private String city;
}
