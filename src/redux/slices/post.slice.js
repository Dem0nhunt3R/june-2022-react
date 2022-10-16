import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiService} from "../../services";
import {urls} from "../../constants";

const initialState = {
    posts: [],
    post: null,
    loading: false,
    error: null,
    chosenPost: null
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await apiService.getAll(urls.posts);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'postSlice?/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await apiService.getById(urls.posts, id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        choosePost: (state, action) => {
            state.chosenPost = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, state => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(getById.pending, state => {
                state.loading = true;
            })
            .addCase(getById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
});


const {reducer: postReducer, actions: {choosePost}} = postSlice;

const postActions = {
    getAll,
    getById,
    choosePost
}

export {postReducer, postActions};