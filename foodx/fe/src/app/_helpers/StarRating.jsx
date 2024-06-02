import React from 'react';

const StarRating = ({ rate }) => {
    const maxStars = 5;
    const filledStars = Math.round(parseFloat(rate));
    const starsArray = [];

    for (let i = 0; i < filledStars; i++) {
        starsArray.push(<span key={i}>&#9733;</span>);
    }

    for (let i = filledStars; i < maxStars; i++) {
        starsArray.push(<span key={i}>&#9734;</span>);
    }

    return (
        <div className='text-yellow-400 text-lg'>
            {starsArray.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
};

export default StarRating;
