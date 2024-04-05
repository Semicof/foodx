package com.example.foodx_be.controller;

import com.example.foodx_be.dto.RestaurantDTO;
import com.example.foodx_be.enity.Restaurant;
import com.example.foodx_be.service.AdminService;
import com.example.foodx_be.service.OpenTimeService;
import com.example.foodx_be.service.RestaurantService;
import com.example.foodx_be.service.UserService;
import com.example.foodx_be.ulti.UpdateState;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/admin")
public class AdminController {
    private OpenTimeService openTimeService;
    private RestaurantService restaurantService;
    private UserService userService;
    private AdminService adminService;

    @GetMapping("/restaurant/views/{restaurantName}")
    public ResponseEntity<Restaurant> getRestaurant(@PathVariable String restaurantName) {
        return new ResponseEntity<>(restaurantService.getRestaurantEnityByName(restaurantName), HttpStatus.OK);
    }

    @GetMapping("/approve/restaurant")
    public ResponseEntity<List<RestaurantDTO>> getUpdateRestaurantList(@RequestParam(name = "updateState") UpdateState updateState,
                                                                       @RequestParam(name = "pageNo") int pageNo,
                                                                       @RequestParam(name = "limit") int limit){
        return new ResponseEntity<>(adminService.getRestaurantList(pageNo, limit, updateState), HttpStatus.OK);
    }

}
