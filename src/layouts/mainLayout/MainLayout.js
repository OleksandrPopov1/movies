import {useContext} from "react";
import {Outlet} from "react-router-dom";

import Header from "../../components/header/Header";
import {Footer} from "../../components";
import {DarkModeContext} from "../../context";

const MainLayout = () => {

    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={darkMode ? 'Container-dark' : ''}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {
    MainLayout
};