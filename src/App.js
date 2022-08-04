import {Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {MoviePage, MovieDetailsPage} from "./pages";
import {SearchPage} from "./pages/SearchPage";
import { DarkModeProvider } from './context';

const App = () => {
    return (
        <div className={'App'}>
            <DarkModeProvider>
                <Routes>
                    <Route path={''} element={<MainLayout/>}>
                        <Route index element={<Navigate to={'allMovie'}/>}/>
                        <Route path={'allMovie'} element={<MoviePage/>}/>
                        <Route path={'movieDetails:movieId'} element={<MovieDetailsPage/>}/>
                        <Route path={'movieSearch:query'} element={<SearchPage/>}/>
                    </Route>
                </Routes>
            </DarkModeProvider>
        </div>
    );
};

export default App;