package com.example.foodx_be.dto;

import com.example.foodx_be.enity.User;
import com.example.foodx_be.ulti.RestaurantState;
import com.example.foodx_be.ulti.UpdateSate;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
@Builder
public class RestaurantDTO {
    private UUID id;
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
    private RestaurantState restaurantState;
    private LocalDate timeAdded;
    private UserDTO userOwner;
    private UserDTO userAdd;
    private List<OpenTimeDTO> openTimeDTOList;
}
