import { NavLink} from "react-router-dom";

import css from './moviesListCard.module.css';
import {PosterPreview} from "../posterPreview/PosterPreview";

const MoviesListCard = ({movie}) => {

    return (
        <NavLink to={'/movieDetails'} className={css.MoviesListCardBlock}>
                <PosterPreview posterImage={movie.poster_path}/>
                <div className={css.titleMovie}>{movie.title}</div>
        </NavLink>

    );
};

export {
    MoviesListCard
};