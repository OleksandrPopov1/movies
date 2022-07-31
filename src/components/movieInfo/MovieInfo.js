import {useNavigate} from "react-router-dom";

import css from './movieInfo.module.css';
import {PosterPreview} from "../posterPreview/PosterPreview";
import StarsRating from "../starsRating/StarsRating";


const MovieInfo = ({movie}) => {

    const navigate = useNavigate();

    return (
            <div className={css.MoviesListCardBlock} onClick={() => navigate('/movieDetails_'+movie.id)}>
                <PosterPreview posterImage={movie.poster_path}/>
                <div className={css.titleMovie}>{movie.title}</div>
                <StarsRating movieRating={movie.vote_average} allowHover={false} size={15}/>
            </div>
    );
};

export {
    MovieInfo
};