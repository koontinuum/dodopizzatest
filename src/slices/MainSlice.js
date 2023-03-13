import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../api/Api";

const getPizzas = async () => {
    const resp = await Api.getPizzas();
    return resp
};

export const fetchPizzas = createAsyncThunk('main/fetchPizzas', getPizzas)

const MainSlice = createSlice({
    name: 'main',
    initialState: {
        isLoading: true,
        pizzasData: [],
        drinksData: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            const pizzas = action.payload.data.filter((el) => el.type != 'drink')
            const drinks = action.payload.data.filter((el) => el.type === 'drink')
            state.pizzasData = pizzas
            state.drinksData = drinks
            // state.data = action.payload.data
        })
    }
});


export const { incremented } = MainSlice.actions
export const MainSliceReducer = MainSlice.reducer