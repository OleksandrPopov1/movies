import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesSearchService, moviesService} from "../../services";

const initialState = {
    movies: [],
    maxPage: null,
    oneMovie: null,
    copyMovie: [],
    filterGenre: null,
    errors: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
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
    async ({name}, {rejectWithValue}) => {
        try {
            const {data} = await moviesSearchService.searchByName(name);
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
            state.filterGenre = action.payload.id;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;

                if(state.filterGenre){
                    state.movies = state.movies.filter(movie => movie.genre_ids.find(value => value === state.filterGenre))
                }
                // state.maxPage = action.payload.total_pages;
                state.oneMovie = null;
                state.errors = null;
            })
            .addCase(getOne.fulfilled, (state, action) => {
                state.oneMovie = action.payload;
            })
            .addCase(getByName.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.maxPage = action.payload.total_pages;
                state.oneMovie = null;
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

const {reducer: movieReducer, actions:{filterByGenre}} = movieSlice;

const movieActions = {
    getAll,
    getOne,
    getByName,
    filterByGenre
};

export {
    movieActions,
    movieReducer
}

