import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingFnc = ({ totalStars = 5 ,rating, setRating}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {[...Array(totalStars)].map((star, index) => {
        const starValue = index + 1;

        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            style={{
              cursor: 'pointer',
              color: (hoverRating || rating) >= starValue ? '#f9ca24' : '#dfe6e9',
              transition: 'color 0.2s ease-in-out',
              opacity: loaded ? 1 : 0,
              fontSize: '2rem'
            }}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default RatingFnc;
