package com.example.foodx_be.service;

import com.example.foodx_be.dto.AddReviewCommand;
import com.example.foodx_be.enity.Restaurant;
import com.example.foodx_be.enity.Review;
import com.example.foodx_be.enity.User;
import com.example.foodx_be.repository.ReviewRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;
@Service
@AllArgsConstructor
public class ReviewServiceImpl implements ReviewService{
    private UserService userService;
    private RestaurantService restaurantService;

    private ReviewRepository reviewRepository;
    @Override
    public void addReview(AddReviewCommand reviewCommand) {
        User userReview = userService.getUser(reviewCommand.getUsername());
        Restaurant restaurant = restaurantService.getRestaurantEnity(reviewCommand.getRestaurantId());
        Review review = converToReviewEnity(reviewCommand);
        review.setUser(userReview);
        review.setRestaurant(restaurant);
        reviewRepository.save(review);
    }

    public Review converToReviewEnity(AddReviewCommand addReviewCommand){
        return Review.builder()
                .reviewTitle(addReviewCommand.getReviewTitle())
                .reviewContent(addReviewCommand.getReviewContent())
                .starNumber(addReviewCommand.getStarNumber())
                .build();
    }
}
