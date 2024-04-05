package com.example.foodx_be.service;

import com.example.foodx_be.dto.RestaurantDTO;
import com.example.foodx_be.ulti.UpdateState;

import java.util.List;

public interface AdminService {
    List<RestaurantDTO> getRestaurantList(int pageNo, int limit, UpdateState updateState);
}
