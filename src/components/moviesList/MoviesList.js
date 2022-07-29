import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import css from './movieList.module.css';
import {movieActions} from "../../redux";
import {MoviesListCard} from "../moviesListCard/MoviesListCard";

const MoviesList = () => {

    const {movies} = useSelector(state => state.movie);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query]);


    const actualPage = +query.get('page');

    const prevPage = () => {
        const page = actualPage - 1;
        setQuery({page: `${page}`})
    };

    const nextPage = () => {
        const page = actualPage + 1;
        setQuery({page: `${page}`})
    };

    return (
        <div>
            <div className={css.movieList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            <button disabled={!(actualPage - 1)} onClick={prevPage}>Prev</button>
            <button disabled={actualPage + 1 > 500} onClick={nextPage}>Next</button>
        </div>
    );
};

export {
    MoviesList
};