import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

const Genre = ({genre, id}) => {

    const {filterGenre} = useSelector(state => state.movie);

    const dispatch = useDispatch();

    const filter = () => {
        if (filterGenre === id) {
            dispatch(movieActions.filterByGenre({id: null}));
        } else {
            dispatch(movieActions.filterByGenre({id: id}));
        }
    };

    return (
        <div onClick={filter} className={'titleGenreBlock'}>
            {genre.name}
        </div>
    );
};

export {
    Genre
};