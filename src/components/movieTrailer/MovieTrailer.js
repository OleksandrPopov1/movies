import {useEffect, useState} from "react";

import css from './movieTrailer.module.css';
import {moviesService} from "../../services";

const MovieTrailer = ({movieId}) => {

    const [videoId, setVideoId] = useState(null);

    useEffect(() => {
        moviesService.getVideoKey(movieId).then(({data}) => {
            const res = data.results;
            const res2 = res.find(value => value.type === 'Teaser' || value.type === 'Trailer');
            if (res2) {
                setVideoId(res2.key);
            } else {
                setVideoId(null);
            }
        })
    }, [movieId, videoId]);

    return (
        <div className={css.movieTrailerBlock}>
            {videoId && <iframe width="300"
                                height="200"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=https://example.com`}
            />}
        </div>
    );
};

export {
    MovieTrailer
};