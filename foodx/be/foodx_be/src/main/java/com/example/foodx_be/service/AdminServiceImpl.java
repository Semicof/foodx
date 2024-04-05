package com.example.foodx_be.service;

import com.example.foodx_be.dto.RestaurantDTO;
import com.example.foodx_be.enity.UpdateRestaurant;
import com.example.foodx_be.repository.UpdateRestaurantRepository;
import com.example.foodx_be.ulti.UpdateState;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService{
    private RestaurantService restaurantService;
    private UserService userService;
    private UpdateRestaurantRepository updateRestaurantRepository;
    @Override
    public List<RestaurantDTO> getRestaurantList(int pageNo, int limit, UpdateState updateState) {
        List<UpdateRestaurant> updateRestaurantList = updateRestaurantRepository.findAllByUpdateState(updateState);
        List<RestaurantDTO> restaurantDTOList = new ArrayList<>();
        for(UpdateRestaurant updateRestaurant: updateRestaurantList){
            restaurantDTOList.add(convertToRestaurantDTO(updateRestaurant));
        }
        return restaurantDTOList;
    }

    private RestaurantDTO convertToRestaurantDTO(UpdateRestaurant updateRestaurant){
        return RestaurantDTO.builder()
                .id(updateRestaurant.getId())
                .restaurantName(updateRestaurant.getRestaurantName())
                .houseNumber(updateRestaurant.getHouseNumber())
                .ward(updateRestaurant.getWard())
                .district(updateRestaurant.getDistrict())
                .city(updateRestaurant.getCity())
                .longitude(updateRestaurant.getLongitude())
                .latitude(updateRestaurant.getLatitude())
                .description(updateRestaurant.getDescription())
                .phoneNumber(updateRestaurant.getPhoneNumber())
                .email(updateRestaurant.getEmail())
                .website(updateRestaurant.getWebsite())
                .facebookLink(updateRestaurant.getFacebookLink())
                .instagramLink(updateRestaurant.getInstagramLink())
                .restaurantState(updateRestaurant.getRestaurantState())
                .timeAdded(updateRestaurant.getRestaurant().getTimeAdded())
                .updateTime(updateRestaurant.getUpdateTime())
                .updateState(updateRestaurant.getUpdateState())
                .userUpdate(userService.convertToDTO(updateRestaurant.getUserUpdate()))
                .userAdd(userService.convertToDTO(updateRestaurant.getRestaurant().getUserAdd()))
                .build();
    }
}

