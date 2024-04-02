package com.example.foodx_be.enity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table
@Entity
public class Review {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;
    @NotBlank
    @Column(name = "review_date")
    private LocalDateTime reviewDate;
    @NotBlank
    @Column(name = "review_title")
    private String reviewTitle;
    @NotBlank
    @Column(name = "review_content")
    private String reviewContent;
    @NotBlank
    @Column(name = "star_number")
    private Double starNumber;
    @Column(name = "like_number")
    private int likeNumber;
    @Column(name = "unlike_number")
    private int unlikeNumber;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_user", referencedColumnName = "id")
    private User user;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_restaurant", referencedColumnName = "id")
    private Restaurant restaurant;

    @JsonIgnore
    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL)
    private List<ReviewImage> reviewImageList;
}
