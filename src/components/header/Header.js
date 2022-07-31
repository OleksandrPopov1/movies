import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './header.module.css';
import {genreActions} from "../../redux";
import {Genres} from "../genres/Genres";

const Header = () => {

    const {show} = useSelector(state => state.genre);
    const dispatch = useDispatch();

    const showGenres = () => {
        if (!show) {
            dispatch(genreActions.setShow(true))
        } else {
            dispatch(genreActions.setShow(false))
        }
    };

    return (
        <div className={css.headerBlock}>
            <NavLink to={'allMovie'}>Movie</NavLink>
            <div className={css.filtersBlock}>
                <button onClick={showGenres}>Genre</button>
                <div className={css.genresBlock}>
                    {show && <Genres/>}
                </div>
            </div>
            <div>
                <input type="text"/>
                <button>Search</button>
            </div>
        </div>
    );
};

export default Header;