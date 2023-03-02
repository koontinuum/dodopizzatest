import { createSlice } from "@reduxjs/toolkit";

const a = JSON.parse(localStorage.getItem('auth'))
const AuthSlice = createSlice({
    name: 'main',
    initialState: {
        isAuth: a,
    },
    reducers: {
        incremented: (state) => {
            state.value += 1
        },
    },
});

export const { incremented } = AuthSlice.actions
export const AuthSliceReducer = AuthSlice.reducer