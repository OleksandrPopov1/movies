import {Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {MoviePage, MovieDetailsPage} from "./pages";
import {SearchPage} from "./pages/SearchPage";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'allMovie'}/>}/>
                    <Route path={'allMovie'} element={<MoviePage/>}/>
                    <Route path={'movieDetails:movieId'} element={<MovieDetailsPage/>}/>
                    <Route path={'movieSearch:query'} element={<SearchPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;