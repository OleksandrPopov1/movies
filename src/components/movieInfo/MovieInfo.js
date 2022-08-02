import {useNavigate} from "react-router-dom";

import css from './movieInfo.module.css';
import {PosterPreview} from "../posterPreview/PosterPreview";
import StarsRating from "../starsRating/StarsRating";


const MovieInfo = ({movie}) => {

    const {poster_path,title, vote_average, id} = movie;

    const navigate = useNavigate();

    return (
            <div className={css.MoviesListCardBlock} onClick={() => navigate('/movieDetails_' + id)}>
                <PosterPreview posterImage={poster_path}/>
                <div className={css.titleMovie}>{title}</div>
                <StarsRating movieRating={vote_average} allowHover={false} size={15} vote={false}/>
            </div>
    );
};

export {
    MovieInfo
};