import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {countryService} from "../../services";

const initialState = {
    countries: [],
    errors: null,
};

const getAll = createAsyncThunk(
    'countrySlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await countryService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const countrySlice = createSlice({
    name: 'countrySlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.countries = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload;
            })
});

const {reducer: countryReducer} = countrySlice;

const countryActions = {
    getAll
};

export {
    countryActions,
    countryReducer
}
