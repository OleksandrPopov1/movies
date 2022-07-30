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
            <div>
                <button onClick={showGenres}>Genre</button>
                <div className={css.genresBlock}>
                    {show && <Genres/>}
                </div>
            </div>
            <input type="text"/>
        </div>
    );
};

export default Header;