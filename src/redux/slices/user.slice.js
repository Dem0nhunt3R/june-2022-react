import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {apiService} from "../../services";
import {urls} from "../../constants";

const initialState = {
    users: [],
    chosenUser: null,
    userFromApi:null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (value, {rejectWithValue}) => {
        try {
            const {data} = await apiService.getAll(urls.users);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)
const getById = createAsyncThunk(
    '/userSlice/getById',
    async (id, {rejectWithValue}) => {
        console.log(id)
        try {
            const {data} = await apiService.getById(urls.users, id.toString());
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        chooseUser: (state, action) => {
            state.chosenUser = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.userFromApi = action.payload;
                state.loading = false;
            })
            .addCase(getById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
});

const {reducer: userReducer, actions: {chooseUser}} = userSlice;

const userActions = {
    getAll,
    getById,
    chooseUser
};

export {userReducer, userActions};