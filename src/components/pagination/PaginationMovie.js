import {Pagination} from "react-bootstrap";

import css from './paginationMovie.module.css';

const PaginationMovie = ({actualPage, setQuery, prevPage, nextPage}) => {

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
        const page = 500;
        setQuery({page: `${page}`})
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
                {(actualPage + 1 <= 500) && <Pagination.Item onClick={nextPage}>{actualPage + 1}</Pagination.Item>}
                {(actualPage + 2 <= 500) && <Pagination.Item onClick={nextTwoPage}>{actualPage + 2}</Pagination.Item>}

                {(actualPage + 3 <= 500) && <Pagination.Ellipsis disabled={true}/>}
                {(actualPage + 10 <= 500) && <Pagination.Item onClick={nextTenPage}>{actualPage + 10}</Pagination.Item>}
                {(actualPage + 1 <= 500) && <Pagination.Next onClick={nextPage}/>}
                {(actualPage + 3 <= 500) && <Pagination.Last on onClick={lastPage}/>}
            </Pagination>
        </div>
    );
};

export {
    PaginationMovie
};