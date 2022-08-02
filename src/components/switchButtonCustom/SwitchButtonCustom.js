import {useState} from "react";

import './switchButtonCustom.module.css';
import {themes} from "../../theme";


const SwitchButtonCustom = ({changeTheme}) => {

    const [darkMode, setDarkMode] = useState(true);

    const changeThemeClick = () => {
        setDarkMode(!darkMode);
        changeTheme(darkMode ? themes.light : themes.dark);
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