import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './movieList.module.css';
import {movieActions} from "../../redux";
import {MovieInfo} from "../movieInfo/MovieInfo";


const MoviesList = ({query}) => {

    const {movies, genreId, country} = useSelector(state => state.movie);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page'), withGenres: `${genreId}`, region: country}));
    }, [dispatch, query, genreId, country]);

    return (
        <div className={css.movieList + ' mediumDark'}>
            {movies.map(movie => <MovieInfo key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    MoviesList
};

