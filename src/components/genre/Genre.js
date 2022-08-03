import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';

import {movieActions} from "../../redux";

const Genre = ({genre, id}) => {

    const {genreId} = useSelector(state => state.movie);
    const [genreOn, setGenreOn] = useState('');

    const dispatch = useDispatch();

    const chooseGenre = () => {
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
        <Dropdown.Item onClick={chooseGenre} style={{color: genreOn}}>
            {genre.name}
        </Dropdown.Item>
    );
};

export {
    Genre
};