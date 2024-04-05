package com.example.foodx_be.enity;

import com.example.foodx_be.ulti.RestaurantState;
import com.example.foodx_be.ulti.UpdateState;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table
public class UpdateRestaurant {
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
    @Column(name = "restaurant_state")
    private RestaurantState restaurantState;
    @Column(name = "time_updated")
    private LocalDateTime updateTime;
    @Column(name = "update_state")
    private UpdateState updateState;

    @PrePersist
    public void control(){
        if(updateState == null){
            updateState = UpdateState.PEDING;
        }
        if(updateTime == null){
            updateTime = LocalDateTime.now();
        }
    }

    @ManyToOne
    @JoinColumn(name = "id_user_update", referencedColumnName = "id")
    private User userUpdate;

    @ManyToOne
    @JoinColumn(name = "id_restaurant", referencedColumnName = "id")
    private Restaurant restaurant;
}
