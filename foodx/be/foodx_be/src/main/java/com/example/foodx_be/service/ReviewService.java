package com.example.foodx_be.service;

import com.example.foodx_be.dto.AddReviewCommand;
import com.example.foodx_be.enity.Review;

import java.util.UUID;

public interface ReviewService {
    void addReview(AddReviewCommand reviewCommand);
}
