package com.example.foodx_be.service;

import com.example.foodx_be.dto.RestaurantDTO;
import com.example.foodx_be.dto.ReviewUpdate;
import com.example.foodx_be.enity.Restaurant;
import com.example.foodx_be.enity.UpdateRestaurant;
import com.example.foodx_be.exception.NoResultsFoundException;
import com.example.foodx_be.repository.RestaurantRepository;
import com.example.foodx_be.repository.UpdateRestaurantRepository;
import com.example.foodx_be.ulti.UpdateState;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {
    private RestaurantService restaurantService;
    private UserService userService;
    private UpdateRestaurantRepository updateRestaurantRepository;
    private RestaurantRepository restaurantRepository;

    @Override
    public List<UpdateRestaurant> getRestaurantList(int pageNo, int limit, UpdateState updateState) {
        List<UpdateRestaurant> updateRestaurantList = updateRestaurantRepository.findAllByUpdateState(updateState);
//        List<RestaurantDTO> restaurantDTOList = new ArrayList<>();
//        for (UpdateRestaurant updateRestaurant : updateRestaurantList) {
//            restaurantDTOList.add(convertToRestaurantDTO(updateRestaurant));
//        }
        return updateRestaurantList;
    }

    @Override
    public void reviewRestaurantUpdate(UUID idRestaurantUpdate, ReviewUpdate reviewUpdate) {
        UpdateRestaurant updateRestaurant = unwrarpRestaurant(updateRestaurantRepository.findById(idRestaurantUpdate));
        if (reviewUpdate.getUpdateState() == UpdateState.ACCEPTED) {
            try {
                Restaurant restaurant = updateRestaurant.getRestaurant();
                updateFromRestaurantUpdate(updateRestaurant, restaurant);
                restaurantRepository.save(restaurant);
            } catch (Exception e) {
            }
        }
        updateRestaurant.setUpdateState(reviewUpdate.getUpdateState());
        updateRestaurant.setReviewUpdateTime(LocalDateTime.now());
        updateRestaurantRepository.save(updateRestaurant);
    }

    static UpdateRestaurant unwrarpRestaurant(Optional<UpdateRestaurant> entity) {
        if (entity.isPresent()) return entity.get();
        else throw new NoResultsFoundException();
    }


    private RestaurantDTO convertToRestaurantDTO(UpdateRestaurant updateRestaurant) {
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

    //DARK SIDE ;))


    public void updateFromRestaurantUpdate(UpdateRestaurant restaurantUpdate, Restaurant restaurant) {
        Optional.ofNullable(restaurantUpdate.getRestaurantName()).ifPresent(restaurant::setRestaurantName);
        Optional.ofNullable(restaurantUpdate.getHouseNumber()).ifPresent(restaurant::setHouseNumber);
        Optional.ofNullable(restaurantUpdate.getWard()).ifPresent(restaurant::setWard);
        Optional.ofNullable(restaurantUpdate.getDistrict()).ifPresent(restaurant::setDistrict);
        Optional.ofNullable(restaurantUpdate.getCity()).ifPresent(restaurant::setCity);
        Optional.ofNullable(restaurantUpdate.getLongitude()).ifPresent(restaurant::setLongitude);
        Optional.ofNullable(restaurantUpdate.getLatitude()).ifPresent(restaurant::setLatitude);
        Optional.ofNullable(restaurantUpdate.getDescription()).ifPresent(restaurant::setDescription);
        Optional.ofNullable(restaurantUpdate.getPhoneNumber()).ifPresent(restaurant::setPhoneNumber);
        Optional.ofNullable(restaurantUpdate.getEmail()).ifPresent(restaurant::setEmail);
        Optional.ofNullable(restaurantUpdate.getWebsite()).ifPresent(restaurant::setWebsite);
        Optional.ofNullable(restaurantUpdate.getFacebookLink()).ifPresent(restaurant::setFacebookLink);
        Optional.ofNullable(restaurantUpdate.getInstagramLink()).ifPresent(restaurant::setInstagramLink);
        Optional.ofNullable(restaurantUpdate.getRestaurantState()).ifPresent(restaurant::setRestaurantState);
    }


}

