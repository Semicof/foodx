package com.example.foodx_be.dto;

import com.example.foodx_be.enity.User;
import com.example.foodx_be.ulti.UpdateSate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RestaurantDTO {
    private String restaurantName;
    private String houseNumber;
    private String ward;
    private String district;
    private String city;
    private BigDecimal longitude;
    private BigDecimal latitude;
    private String description;
    private String phoneNumber;
    private String email;
    private String website;
    private String facebookLink;
    private String instagramLink;
    private User user;
}
