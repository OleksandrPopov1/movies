import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genres: [],
    show: false,
    errors: null,
};


const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload;
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
            })
});

const {reducer: genreReducer, actions: {setShow}} = genreSlice;

const genreActions = {
    getAll,
    setShow
};

export {
    genreActions,
    genreReducer
}

