import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer} from "./slices";

const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};