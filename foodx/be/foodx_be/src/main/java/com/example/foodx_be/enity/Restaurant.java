package com.example.foodx_be.enity;

import com.example.foodx_be.ulti.UpdateSate;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table
@Entity
public class Restaurant {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;
    @Column(name = "id_user")
    private UUID userID;
    @NotBlank
    @Column(name = "restaurant_name")
    private String restaurantName;
    @NotBlank
    @Column(name = "house_number")
    private String houseNumber;
    @NotBlank
    private String ward;
    @NotBlank
    private String district;
    @NotBlank
    private String city;
    @NotBlank
    private BigDecimal longitude;
    @NotBlank
    private BigDecimal latitude;
    @NotBlank
    private String description;
    @Column(name = "phone_number")
    private String phoneNumber;
    private String email;
    private String website;
    @Column(name = "facebook_link")
    private String facebookLink;
    @Column(name = "instagram_link")
    private String instagramLink;
    @Column(name = "state")
    private UpdateSate updateSate;
    @Column(name = "update_time")
    private LocalDateTime updateTime;

    @JsonIgnore
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
    private List<Review> reviewList;
    @JsonIgnore
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
    private List<OpenTime> openTimeList;
}
