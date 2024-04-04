package com.example.foodx_be.controller;

import com.example.foodx_be.dto.AddRestaurantCommand;
import com.example.foodx_be.dto.RestaurantDTO;
import com.example.foodx_be.enity.OpenTime;
import com.example.foodx_be.service.RestaurantService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/restaurant")
public class RestaurantController {
    private RestaurantService restaurantService;

    @PostMapping("/add")
    public ResponseEntity<HttpStatus> addRestaurant(@RequestBody AddRestaurantCommand addRestaurantCommand) {
        restaurantService.addRestaurant(addRestaurantCommand);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/{restaurantName}/update/opentime")
    public ResponseEntity<List<HttpStatus>> addOpenTime(@PathVariable String restaurantName, @RequestBody List<OpenTime> openTimeList){
        restaurantService.addOpenTimeToRestaurant(restaurantName, openTimeList);
        return  new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{restaurantName}")
    public ResponseEntity<RestaurantDTO> getRestaurant(@PathVariable String restaurantName){
        return new ResponseEntity<>(restaurantService.getRestaurantDTO(restaurantName), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<RestaurantDTO>> getRestaurants(@RequestParam(name = "searchBy") String searchBy,
                                                              @RequestParam(name = "keyword") String keyword,
                                                              @RequestParam(name = "pageNo", defaultValue = "0") int pageNo,
                                                              @RequestParam(name = "limit", defaultValue = "10") int limit){
        return new ResponseEntity<>(restaurantService.getRestaurantsByKeyword(pageNo,limit, keyword, searchBy), HttpStatus.OK);
    }
}
