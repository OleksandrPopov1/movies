import {Outlet} from "react-router-dom";

import Header from "../../components/header/Header";
import {Footer} from "../../components";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {
    MainLayout
};