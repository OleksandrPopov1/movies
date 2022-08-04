import {useEffect, useState} from "react";

import css from './movieTrailer.module.css';
import {moviesService} from "../../services";

const MovieTrailer = ({movieId}) => {

    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        moviesService.getVideoKey(movieId).then(({data}) => {
            const videoArr = data.results;
            const trailer = videoArr.find(value => value.type === 'Teaser' || value.type === 'Trailer');
            if (trailer) {
                setTrailer(trailer);
            } else {
                setTrailer(null);
            }
        })
    }, [movieId, trailer]);

    return (
        <div className={css.movieTrailerBlock}>
            {trailer && <iframe title={trailer.name}
                                width="300"
                                height="200"
                                src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&origin=https://example.com`}
            />}
        </div>
    );
};

export {
    MovieTrailer
};