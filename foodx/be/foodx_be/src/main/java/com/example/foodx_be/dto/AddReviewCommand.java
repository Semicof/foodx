package com.example.foodx_be.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
public class AddReviewCommand {
    private String reviewTitle;
    private String reviewContent;
    private Double starNumber;
    private String username;
    private UUID restaurantId;
}
