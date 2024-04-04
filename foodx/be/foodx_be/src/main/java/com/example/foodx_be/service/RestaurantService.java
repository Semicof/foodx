package com.example.foodx_be.service;

import com.example.foodx_be.dto.AddRestaurantCommand;
import com.example.foodx_be.dto.RestaurantDTO;
import com.example.foodx_be.enity.OpenTime;
import com.example.foodx_be.enity.Restaurant;
import org.springframework.data.domain.Page;

import java.util.List;

public interface RestaurantService {
    void addRestaurant(AddRestaurantCommand addRestaurantCommand);
    RestaurantDTO getRestaurantDTO(String restaurantName);
    Page<RestaurantDTO> getRestaurantsByKeyword(int page, int limit, String keyword, String searchType);
    Restaurant getRestaurantEnity(String restaurantName);
    void addOpenTimeToRestaurant(String restaurantName, List<OpenTime> openTimeList);

}
