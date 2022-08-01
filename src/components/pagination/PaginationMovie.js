import {Pagination} from "react-bootstrap";

import css from './paginationMovie.module.css';
import {useSelector} from "react-redux";

const PaginationMovie = ({actualPage, setQuery}) => {

    const {maxPage} = useSelector(state => state.movie);

    const prevPage = () => {
        const page = actualPage - 1;
        setQuery({page: `${page}`})
    };

    const nextPage = () => {
        const page = actualPage + 1;
        setQuery({page: `${page}`})
    };

    const nextTenPage = () => {
        const page = actualPage + 10;
        setQuery({page: `${page}`})
    };

    const nextTwoPage = () => {
        const page = actualPage + 2;
        setQuery({page: `${page}`})
    };

    const prevTenPage = () => {
        const page = actualPage - 10;
        setQuery({page: `${page}`})
    };

    const prevTwoPage = () => {
        const page = actualPage - 2;
        setQuery({page: `${page}`})
    };

    const firstPage = () => {
        const page = 1;
        setQuery({page: `${page}`})
    };

    const lastPage = () => {
        setQuery({page: `${maxPage}`})
    };

    return (
        <div className={css.paginationBlock}>
            <Pagination>
                {(actualPage - 10 >= 1) && <Pagination.First onClick={firstPage}/>}
                {(actualPage - 1 >= 1) && <Pagination.Prev onClick={prevPage}/>}
                {(actualPage - 10 >= 1) && <Pagination.Item onClick={prevTenPage} >{actualPage - 10}</Pagination.Item>}
                {(actualPage - 3 >= 1) && <Pagination.Ellipsis disabled={true}/>}

                {(actualPage - 2 >= 1) && <Pagination.Item onClick={prevTwoPage}>{actualPage - 2}</Pagination.Item>}
                {(actualPage - 1 >= 1) && <Pagination.Item onClick={prevPage}>{actualPage - 1}</Pagination.Item>}
                <Pagination.Item active>{actualPage}</Pagination.Item>
                {(actualPage + 1 <= maxPage) && <Pagination.Item onClick={nextPage}>{actualPage + 1}</Pagination.Item>}
                {(actualPage + 2 <= maxPage) && <Pagination.Item onClick={nextTwoPage}>{actualPage + 2}</Pagination.Item>}

                {(actualPage + 3 <= maxPage) && <Pagination.Ellipsis disabled={true}/>}
                {(actualPage + 10 <= maxPage) && <Pagination.Item onClick={nextTenPage}>{actualPage + 10}</Pagination.Item>}
                {(actualPage + 1 <= maxPage) && <Pagination.Next onClick={nextPage}/>}
                {(actualPage + 3 <= maxPage) && <Pagination.Last onClick={lastPage}/>}
            </Pagination>
        </div>
    );
};

export {
    PaginationMovie
};