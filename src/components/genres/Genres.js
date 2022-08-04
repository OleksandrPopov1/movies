import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown';

import css from './genres.module.css';
import {genreActions} from "../../redux";
import {Genre} from "../genre/Genre";

const Genres = () => {

    const {genres} = useSelector(state => state.genre);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    return (
        <Dropdown autoClose={'outside'}>
            <Dropdown.Toggle variant="info" id="dropdown-basic" className={'buttonDark'}>
                Genre
            </Dropdown.Toggle>

            <Dropdown.Menu className={css.genreMenu + ' lowDark'}>
                {genres.map(genre => <Genre key={genre.id} genre={genre} id={genre.id}/>)}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export {
    Genres
};