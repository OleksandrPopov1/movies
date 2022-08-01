import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";

import css from './header.module.css';
import {movieActions} from "../../redux";
import {Genres} from "../genres/Genres";
import {UserInfo} from "../userInfo/UserInfo";

const Header = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');
    const [showGenre, setShowGenre] = useState(false);

    const navigate = useNavigate();

    const showGenres = () => {
        setShowGenre(!showGenre);
    };

    const change = e => {
        setInputValue(e.target.value);
    };

    const search = () => {
        dispatch(movieActions.searchName(inputValue));
        dispatch(movieActions.getByName({name: inputValue}));
        navigate('/allMovie');
        setInputValue('');
    };

    const keyPress = e =>{
        if(e.code === 'Enter') {
            search();
        }
    }

    return (
        <div className={css.headerBlock}>
            <NavLink to={'allMovie'} onClick={window.location.reload}>All Movie</NavLink>

            <div className={css.filtersBlock}>
                <button onClick={showGenres}>Genre</button>
                <div className={css.genresBlock}>
                    {showGenre && <Genres/>}
                </div>
            </div>

            <div className={css.rightHeader}>
                <div className={css.searchBlock}>
                    <input type="text" onKeyPress={keyPress} value={inputValue} onChange={change}/>
                    <button onClick={search}>
                        <img src="https://cdn-icons-png.flaticon.com/512/751/751463.png" alt=""/>
                    </button>
                </div>

                <UserInfo/>
            </div>
        </div>
    );
};

export default Header;