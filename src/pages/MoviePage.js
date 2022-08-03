import {useSearchParams} from "react-router-dom";

import {MoviesList, PaginationMovie} from "../components";

const MoviePage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const actualPage = +query.get('page');

    return (
        <div>
            <MoviesList query={query}/>
            <PaginationMovie actualPage={actualPage} setQuery={setQuery}/>
        </div>
    );
};

export {
    MoviePage
};