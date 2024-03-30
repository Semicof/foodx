package com.example.foodx_be.enity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDateTime;
import java.util.UUID;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class OpenTime {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;
    @NotBlank
    @Column(name = "day_of_week")
    private String dayOfWeek;
    @Column(name = "opening_time")
    private LocalDateTime openingTime;
    @Column(name = "closing_time")
    private LocalDateTime closingTime;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_restaurant", referencedColumnName = "id")
    private Restaurant restaurant;
}
