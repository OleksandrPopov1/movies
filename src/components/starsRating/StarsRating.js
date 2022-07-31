import React, {useState} from 'react'
import {Rating} from 'react-simple-star-rating'

export default function StarsRating({movieRating, allowHover , size}) {
    const [rating, setRating] = useState(movieRating * 10) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
    }

    return (
        <div className='app'>
            <Rating onClick={handleRating}
                    ratingValue={rating}
                    allowHover={allowHover}
                    size={size}
                /* Available Props */ />
        </div>
    )
}