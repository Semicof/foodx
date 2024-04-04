package com.example.foodx_be.service;

import com.example.foodx_be.dto.AddRestaurantCommand;
import com.example.foodx_be.dto.RestaurantDTO;
import org.springframework.data.domain.Page;

public interface RestaurantService {
    void addRestaurant(AddRestaurantCommand addRestaurantCommand);
    RestaurantDTO getRestaurant(String restaurantName);
    Page<RestaurantDTO> getRestaurantsByKeyword(int page, int limit, String keyword, String searchType);

}
