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
import {SearchInput} from "../searchInput/SearchInput";

const Header = () => {

    const dispatch = useDispatch();

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
                <SearchInput/>
                <UserInfo/>
            </div>
        </div>
    );
};

export default Header;