import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthSliceReducer } from "../slices/AuthSlice";
import { MainSliceReducer } from '../slices/MainSlice'

const reducers = combineReducers({
    main: MainSliceReducer,
    auth: AuthSliceReducer,
})

export const redux = configureStore({
    reducer: reducers
})

redux.subscribe(() => {
    const state = redux.getState()
    localStorage.setItem('auth', state.auth.isAuth)
})