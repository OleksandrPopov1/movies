import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";

import css from './header.module.css';
import {movieActions} from "../../redux";
import {Genres} from "../genres/Genres";
import {UserInfo} from "../userInfo/UserInfo";
import {ThemeContext} from "../../theme";
import {SwitchButtonCustom} from "../switchButtonCustom/SwitchButtonCustom";
import {Countries} from "../countries/Countries";

const Header = () => {

    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const change = e => {
        setInputValue(e.target.value);
    };

    const search = () => {
        if (inputValue) {
            dispatch(movieActions.searchName(inputValue));
            navigate('/movieSearch' + inputValue);
            setInputValue('');
        }
    };

    const keyPress = e => {
        if (e.code === 'Enter') {
            search();
        }
    }

    const resetFilter = () => {
        dispatch(movieActions.setCountry(''));
        dispatch(movieActions.filterByGenre({id: ''}));
    };

    return (
        <div className={css.headerBlock}>
            <div className={css.ownTitleBlock}>
                <NavLink to={'allMovie'} onClick={resetFilter}>All Movie</NavLink>

                <ThemeContext.Consumer>
                    {({changeTheme}) => (<SwitchButtonCustom changeTheme={changeTheme}/>)}
                </ThemeContext.Consumer>
            </div>

            <div className={css.sortBlock}>
                <Genres/>
                <Countries/>
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