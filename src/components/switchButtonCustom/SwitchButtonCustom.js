import {useContext} from "react";

import './switchButtonCustom.module.css';
import {DarkModeContext} from "../../context";

const SwitchButtonCustom = () => {
const {toggleDarkMode} = useContext(DarkModeContext);

    const changeThemeClick = () => {
        toggleDarkMode()
    }

    return (
        <div>
            <input type={'checkbox'} id={'switch'} onClick={changeThemeClick}/>
            <label htmlFor="switch">Toggle</label>
        </div>
    );
};

export {
    SwitchButtonCustom
};