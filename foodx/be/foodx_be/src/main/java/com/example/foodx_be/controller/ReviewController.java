package com.example.foodx_be.controller;

import com.example.foodx_be.dto.AddReviewCommand;
import com.example.foodx_be.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/review")
public class ReviewController {
    private ReviewService reviewService;
    @PostMapping("/add")
    public ResponseEntity<HttpStatus> addReview(@RequestBody AddReviewCommand addReviewCommand){
        reviewService.addReview(addReviewCommand);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
