import { createSlice } from "@reduxjs/toolkit";


const MainSlice = createSlice({
    name: 'main',
    initialState: {
        value: 0,
        name: 'asd'
    },
    reducers: {
        incremented: (state) => {
            state.value += 1
        },
    },
});


export const { incremented } = MainSlice.actions
export const MainSliceReducer = MainSlice.reducer