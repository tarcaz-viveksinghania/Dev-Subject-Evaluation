'use client';
import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./UserSlice"

const makeStore = configureStore({
    reducer:{
        user: userReducer
    }
});

export default makeStore;