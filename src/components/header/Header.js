import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

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
        <div>
            <NavLink to={'allMovie'}>Movie</NavLink>
            <div>
                <button onClick={showGenres}>Genre</button>
                {show && <Genres/>}
            </div>
            <input type="text"/>
        </div>
    );
};

export default Header;