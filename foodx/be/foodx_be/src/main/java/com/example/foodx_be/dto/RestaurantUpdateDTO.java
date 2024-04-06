package com.example.foodx_be.dto;

import com.example.foodx_be.ulti.RestaurantState;
import com.example.foodx_be.ulti.UpdateState;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
public class RestaurantUpdateDTO {
    private UUID idUpdate;
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
    @JsonFormat(pattern = "dd:MM:yyyy")
    private LocalDate timeAdded;
    private UserDTO userOwner;
    private UserDTO userUpdate;
    private UpdateState updateState;
    @JsonFormat(pattern = "HH:mm:ss dd:MM:yyyy")
    private LocalDateTime updateTime;
    private RestaurantDTO restaurantDTO;
}
