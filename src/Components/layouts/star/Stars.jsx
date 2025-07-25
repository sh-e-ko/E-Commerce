import React from 'react';
import StarRatings from 'react-star-ratings';

export default function Stars({ rating })
{
    return (
        <StarRatings
            rating={rating}
            starRatedColor="#ffd700"
            numberOfStars={5}
            starDimension="24px"
            starSpacing="3px"
            name='rating'
        />
    );
}

