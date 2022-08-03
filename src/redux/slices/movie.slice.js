import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import { moviesService} from "../../services";

const initialState = {
    movies: [],
    maxPage: null,
    oneMovie: null,
    searchMovie: null,
    genreId: '',
    country: '',
    errors: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page, withGenres, region}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page, withGenres, region);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getOne = createAsyncThunk(
    'movieSlice/getOne',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getOneById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getByName = createAsyncThunk(
    'movieSlice/getByName',
    async ({name, page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.searchByName(name, page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        filterByGenre: (state, action) => {
            state.genreId = action.payload.id;
        },
        searchName: (state, action) => {
            state.searchMovie = action.payload;
        },
        setCountry: (state, action) => {
            state.country = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;

                if (action.payload.total_pages < 500) {
                    state.maxPage = action.payload.total_pages;
                } else {
                    state.maxPage = 500;
                }

                state.errors = null;
            })
            .addCase(getOne.fulfilled, (state, action) => {
                state.oneMovie = action.payload;
                state.errors = null;
            })
            .addCase(getByName.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.maxPage = action.payload.total_pages;
                state.errors = null;
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload;
                } else {
                    state.errors = null;
                }

            })
});

const {reducer: movieReducer, actions: {filterByGenre, searchName, setCountry}} = movieSlice;

const movieActions = {
    getAll,
    getOne,
    getByName,
    filterByGenre,
    searchName,
    setCountry
};

export {
    movieActions,
    movieReducer
}

