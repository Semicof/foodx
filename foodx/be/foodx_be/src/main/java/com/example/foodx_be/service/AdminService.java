package com.example.foodx_be.service;

import com.example.foodx_be.dto.RestaurantDTO;
import com.example.foodx_be.dto.RestaurantUpdateDTO;
import com.example.foodx_be.dto.ReviewUpdate;
import com.example.foodx_be.enity.UpdateRestaurant;
import com.example.foodx_be.ulti.UpdateState;

import java.util.List;
import java.util.UUID;

public interface AdminService {
    List<UpdateRestaurant> getRestaurantList(int pageNo, int limit, UpdateState updateState);
    void reviewRestaurantUpdate(UUID idRestaurantUpdate, ReviewUpdate reviewUpdate);
}
