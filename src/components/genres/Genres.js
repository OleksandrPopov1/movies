import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../../redux";
import {Genre} from "../genre/Genre";

const Genres = () => {

    const {genres} = useSelector(state => state.genre);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, []);

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {
    Genres
};