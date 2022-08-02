import {Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts/MainLayout";
import {AllMoviePage, MovieDetailsPage} from "./pages";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'allMovie'}/>}/>
                    <Route path={'allMovie'} element={<AllMoviePage/>}/>
                    <Route path={'movieDetails:movieId'} element={<MovieDetailsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;