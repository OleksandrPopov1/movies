import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import css from './movieList.module.css';
import {movieActions} from "../../redux";
import {MovieInfo} from "../movieInfo/MovieInfo";
import {PaginationMovie} from "../pagination/PaginationMovie";

const MoviesList = () => {

    const {movies, filterGenre} = useSelector(state => state.movie);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query, filterGenre]);


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
                {movies.map(movie => <MovieInfo key={movie.id} movie={movie}/>)}

            </div>

            {/*<button disabled={!(actualPage - 1)} onClick={prevPage} className={css.buttonPrev}>*/}
            {/*    <i className="fa-solid fa-circle-left"/>*/}
            {/*</button>*/}
            {/*<button disabled={actualPage > 499 || actualPage >= maxPage} onClick={nextPage} className={css.buttonNext}>*/}
            {/*    Next*/}
            {/*</button>*/}

            <PaginationMovie prevPage={prevPage} nextPage={nextPage} actualPage={actualPage} setQuery={setQuery}/>
        </div>
    );
};

export {
    MoviesList
};