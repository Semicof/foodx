package com.example.foodx_be.controller;

import com.example.foodx_be.enity.Restaurant;
import com.example.foodx_be.service.OpenTimeService;
import com.example.foodx_be.service.RestaurantService;
import com.example.foodx_be.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/admin")
public class AdminController {
    private OpenTimeService openTimeService;
    private RestaurantService restaurantService;
    private UserService userService;

    @GetMapping("/restaurant/views/{restaurantName}")
    public ResponseEntity<Restaurant> getRestaurant(@PathVariable String restaurantName){
        return new ResponseEntity<>(restaurantService.getRestaurantEnityByName(restaurantName), HttpStatus.OK);
    }
}
