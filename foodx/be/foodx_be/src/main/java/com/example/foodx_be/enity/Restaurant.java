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
    @Column(name = "restaurant_name")
    private String restaurantName;
    @Column(name = "house_number")
    private String houseNumber;
    private String ward;
    private String district;
    private String city;
    private BigDecimal longitude;
    private BigDecimal latitude;
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

    @ManyToOne
    @JoinColumn(name = "id_user", referencedColumnName = "id")
    private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
    private List<Review> reviewList;

    @JsonIgnore
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
    private List<OpenTime> openTimeList;

}
