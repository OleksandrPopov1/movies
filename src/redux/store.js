import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {countryReducer, genreReducer, movieReducer} from "./slices";

const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer,
    country: countryReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};