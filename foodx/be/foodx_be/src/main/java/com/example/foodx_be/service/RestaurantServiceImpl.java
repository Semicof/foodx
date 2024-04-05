package com.example.foodx_be.service;

import com.example.foodx_be.dto.AddRestaurantCommand;
import com.example.foodx_be.dto.OpenTimeDTO;
import com.example.foodx_be.dto.RestaurantDTO;
import com.example.foodx_be.enity.OpenTime;
import com.example.foodx_be.enity.Restaurant;
import com.example.foodx_be.enity.User;
import com.example.foodx_be.exception.NoResultsFoundException;
import com.example.foodx_be.repository.RestaurantRepository;
import com.example.foodx_be.ulti.RestaurantState;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class RestaurantServiceImpl implements RestaurantService {
    private UserService userService;
    private RestaurantRepository restaurantRepository;
    @Override
    public void addRestaurant(AddRestaurantCommand addRestaurantCommand) {
        User user = userService.getUser(addRestaurantCommand.getUserName());
        Restaurant restaurant = convertToRestaurant(addRestaurantCommand);
        restaurant.setUserAdd(user);
        restaurantRepository.save(restaurant);
    }

    @Override
    public RestaurantDTO getRestaurantDTO(UUID idRestaurant) {
        Optional<Restaurant> restaurantOptional = restaurantRepository.findById(idRestaurant);
        Restaurant restaurant = unwrarpRestaurant(restaurantOptional);
        return convertToRestaurantDTO(restaurant);
    }

    @Override
    public Page<RestaurantDTO> getRestaurantsByKeyword(int pageNo, int limit, String keyword, String searchBy) {
        List<Restaurant> restaurantList = new ArrayList<>();
        switch (searchBy) {
            case "city":
                restaurantList = restaurantRepository.findAllByCityAndRestaurantState(keyword, RestaurantState.PUBLISH);
                break;
            case "restaurantName":
                restaurantList = restaurantRepository.findAllByRestaurantNameAndRestaurantState(keyword, RestaurantState.PUBLISH);
                break;
        }
        if (restaurantList.isEmpty()) {
            throw new NoResultsFoundException();
        }
        List<RestaurantDTO> userDTOList = new ArrayList<>();
        for (Restaurant restaurant : restaurantList) {
            userDTOList.add(convertToRestaurantDTO(restaurant));
        }
        Pageable pageable = PageRequest.of(pageNo, limit);

        int startIndex = (int) pageable.getOffset();
        int endIndex = (int) Math.min(pageable.getOffset() + pageable.getPageSize(), userDTOList.size());
        List<RestaurantDTO> subList = userDTOList.subList(startIndex, endIndex);
        return new PageImpl<>(subList, pageable, userDTOList.size());
    }

    @Override
    public Restaurant getRestaurantEnity(UUID idRestaurant) {
        Optional<Restaurant> restaurantOptional = restaurantRepository.findById(idRestaurant);
        Restaurant restaurant = unwrarpRestaurant(restaurantOptional);
        return  restaurant;
    }

    @Override
    public Restaurant getRestaurantEnityByName(String restaurantName) {
        Optional<Restaurant> restaurantOptional = restaurantRepository.findRestaurantByRestaurantName(restaurantName);
        Restaurant restaurant = unwrarpRestaurant(restaurantOptional);
        return restaurant;
    }

    static Restaurant unwrarpRestaurant(Optional<Restaurant> entity) {
        if (entity.isPresent()) return entity.get();
        else throw new NoResultsFoundException();
    }

    private Restaurant convertToRestaurant(AddRestaurantCommand addRestaurantCommand) {
        return Restaurant.builder()
                .restaurantName(addRestaurantCommand.getRestaurantName())
                .houseNumber(addRestaurantCommand.getHouseNumber())
                .ward(addRestaurantCommand.getWard())
                .district(addRestaurantCommand.getDistrict())
                .city(addRestaurantCommand.getCity())
                .longitude(addRestaurantCommand.getLongitude())
                .latitude(addRestaurantCommand.getLatitude())
                .description(addRestaurantCommand.getDescription())
                .phoneNumber(addRestaurantCommand.getPhoneNumber())
                .email(addRestaurantCommand.getEmail())
                .website(addRestaurantCommand.getWebsite())
                .facebookLink(addRestaurantCommand.getFacebookLink())
                .instagramLink(addRestaurantCommand.getInstagramLink())
                .build();
    }

    private RestaurantDTO convertToRestaurantDTO(Restaurant restaurant) {
        RestaurantDTO.RestaurantDTOBuilder builder = RestaurantDTO.builder()
                .id(restaurant.getId())
                .restaurantName(restaurant.getRestaurantName())
                .houseNumber(restaurant.getHouseNumber())
                .ward(restaurant.getWard())
                .district(restaurant.getDistrict())
                .city(restaurant.getCity())
                .longitude(restaurant.getLongitude())
                .latitude(restaurant.getLatitude())
                .description(restaurant.getDescription())
                .phoneNumber(restaurant.getPhoneNumber())
                .email(restaurant.getEmail())
                .website(restaurant.getWebsite())
                .facebookLink(restaurant.getFacebookLink())
                .instagramLink(restaurant.getInstagramLink())
                .restaurantState(restaurant.getRestaurantState())
                .timeAdded(restaurant.getTimeAdded())
                .userAdd(userService.convertToDTO(restaurant.getUserAdd()));
        if (restaurant.getUserOwner() != null) {
            builder.userOwner(userService.convertToDTO(restaurant.getUserOwner()));
        }
        return builder.build();
    }


}
