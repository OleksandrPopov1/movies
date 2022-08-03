import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './movieSearchList.module.css';
import {movieActions} from "../../redux";
import {MovieInfo} from "../movieInfo/MovieInfo";

const MoviesSearchList = ({query}) => {
    const {movies, searchMovie} = useSelector(state => state.movie);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getByName({name: searchMovie, page: query.get('page')}));
    }, [dispatch, query, searchMovie]);

    return (
        <div className={css.movieList}>
            {movies.map(movie => <MovieInfo key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    MoviesSearchList
};