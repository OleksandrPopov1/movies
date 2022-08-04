import React, {useState} from 'react';
import {Rating} from 'react-simple-star-rating';

export default function StarsRating({movieRating, allowHover, size, vote}) {
    const [rating, setRating] = useState(movieRating * 10);

    const handleRating = (rate) => {
        if (vote) {
            setRating(rate);
        }
    }

    return (
        <div className='app'>
            <Rating onClick={handleRating}
                    ratingValue={rating}
                    allowHover={allowHover}
                    size={size}
            />
        </div>
    )
}