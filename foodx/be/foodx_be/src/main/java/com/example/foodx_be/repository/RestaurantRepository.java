package com.example.foodx_be.repository;

import com.example.foodx_be.enity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface RestaurantRepository extends JpaRepository<Restaurant, UUID> {
    Optional<Restaurant> findRestaurantByRestaurantName(String restaurantName);
    List<Restaurant> findAllByRestaurantNameContaining(String retaurantName);
    List<Restaurant> findAllByCityContaining(String city);
    List<Restaurant> findAllByDistrict(String district);
}
