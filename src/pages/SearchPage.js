import {useSearchParams} from "react-router-dom";

import {MoviesSearchList, PaginationMovie} from "../components";

const SearchPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const actualPage = +query.get('page');

    return (
        <div>
            <MoviesSearchList query={query}/>
            <PaginationMovie actualPage={actualPage} setQuery={setQuery}/>
        </div>
    );
};

export {
    SearchPage
};