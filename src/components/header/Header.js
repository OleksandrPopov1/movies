import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './header.module.css';
import {movieActions} from "../../redux";
import {Genres} from "../genres/Genres";
import {UserInfo} from "../userInfo/UserInfo";
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
        <div className={css.headerBlock + ' veryDark'}>
            <div className={css.ownTitleBlock}>
                <NavLink to={'allMovie'} onClick={resetFilter}>All Movie</NavLink>
                <SwitchButtonCustom/>
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