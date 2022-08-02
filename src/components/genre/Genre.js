import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {movieActions} from "../../redux";

const Genre = ({genre, id}) => {

    const {genreId} = useSelector(state => state.movie);
    const [genreOn, setGenreOn] = useState('');

    const dispatch = useDispatch();

    const filter = () => {
        const strId = id.toString();
        const arrGenre = genreId.split(',');
        const findIndex = arrGenre.indexOf(strId);

        if (findIndex === -1) {
            arrGenre.push(strId);
            dispatch(movieActions.filterByGenre({id: arrGenre.join(',')}));

            setGenreOn('red')
        } else {
            arrGenre.splice(findIndex, 1)
            dispatch(movieActions.filterByGenre({id: arrGenre.join(',')}));
            setGenreOn('');
        }
    };


    return (
        <div id={id} onClick={filter} style={{color: genreOn}}>
            {genre.name}
        </div>
    );
};

export {
    Genre
};