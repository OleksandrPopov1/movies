import {useNavigate} from "react-router-dom";

import css from './moviesListCard.module.css';
import {PosterPreview} from "../posterPreview/PosterPreview";

const MoviesListCard = ({movie}) => {

    const navigate = useNavigate();

    return (
            <div className={css.MoviesListCardBlock} onClick={() => navigate('/movieDetails_'+movie.id)}>
                <PosterPreview posterImage={movie.poster_path}/>
                <div className={css.titleMovie}>{movie.title}</div>
            </div>
    );
};

export {
    MoviesListCard
};