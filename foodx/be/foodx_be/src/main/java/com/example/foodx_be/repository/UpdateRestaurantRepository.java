package com.example.foodx_be.repository;

import com.example.foodx_be.enity.UpdateRestaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UpdateRestaurantRepository extends JpaRepository<UpdateRestaurant, UUID> {
}
