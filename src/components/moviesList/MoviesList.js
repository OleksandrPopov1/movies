import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import css from './movieList.module.css';
import {movieActions} from "../../redux";
import {MovieInfo} from "../movieInfo/MovieInfo";
import {PaginationMovie} from "../pagination/PaginationMovie";

const MoviesList = () => {

    const {movies, genreId, searchMovie, errors} = useSelector(state => state.movie);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        if (searchMovie) {
            dispatch(movieActions.getByName({name: searchMovie,page: query.get('page')}));
        } else {
            dispatch(movieActions.getAll({page: query.get('page'), withGenres: `${genreId}`}));
        }
    }, [dispatch, query, genreId, searchMovie]);


    const actualPage = +query.get('page');

    return (
        <div>
            <div className={css.movieList}>
                {errors}
                {movies.map(movie => <MovieInfo key={movie.id} movie={movie}/>)}
            </div>

            <PaginationMovie actualPage={actualPage} setQuery={setQuery}/>
        </div>
    );
};

export {
    MoviesList
};

