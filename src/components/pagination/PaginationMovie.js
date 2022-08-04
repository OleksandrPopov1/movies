import {Pagination} from "react-bootstrap";

import css from './paginationMovie.module.css';
import {useSelector} from "react-redux";

const PaginationMovie = ({actualPage, setQuery}) => {

    const {maxPage} = useSelector(state => state.movie);

    const prevPage = (num) => {
        const page = actualPage - num;
        setQuery({page: `${page}`})
    };

    const nextPage = (num) => {
        const page = actualPage + num;
        setQuery({page: `${page}`})
    };

    return (
        <div className={css.paginationBlock}>
            <Pagination>
                {(actualPage - 10 >= 1) && <Pagination.First onClick={() => prevPage(actualPage - 1)}/>}
                {(actualPage - 1 >= 1) && <Pagination.Prev onClick={() => prevPage(2)}/>}
                {(actualPage - 10 >= 1) &&
                    <Pagination.Item onClick={() => prevPage(2)}>{actualPage - 10}</Pagination.Item>}
                {(actualPage - 3 >= 1) && <Pagination.Ellipsis disabled={true}/>}

                {(actualPage - 2 >= 1) &&
                    <Pagination.Item onClick={() => prevPage(2)}>{actualPage - 2}</Pagination.Item>}
                {(actualPage - 1 >= 1) &&
                    <Pagination.Item onClick={() => prevPage(1)}>{actualPage - 1}</Pagination.Item>}

                <Pagination.Item active>{actualPage}</Pagination.Item>

                {(actualPage + 1 <= maxPage) &&
                    <Pagination.Item onClick={() => nextPage(1)}>{actualPage + 1}</Pagination.Item>}
                {(actualPage + 2 <= maxPage) &&
                    <Pagination.Item onClick={() => nextPage(2)}>{actualPage + 2}</Pagination.Item>}

                {(actualPage + 3 <= maxPage) && <Pagination.Ellipsis disabled={true}/>}
                {(actualPage + 10 <= maxPage) &&
                    <Pagination.Item onClick={() => nextPage(10)}>{actualPage + 10}</Pagination.Item>}
                {(actualPage + 1 <= maxPage) && <Pagination.Next onClick={() => nextPage(1)}/>}
                {(actualPage + 3 <= maxPage) && <Pagination.Last onClick={() => nextPage(maxPage - actualPage)}/>}
            </Pagination>
        </div>
    );
};

export {
    PaginationMovie
};