package com.example.foodx_be.repository;

import com.example.foodx_be.enity.ReviewImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ReviewImageRepository extends JpaRepository<ReviewImage, UUID> {
}
