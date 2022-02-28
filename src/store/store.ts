import { configureStore } from "@reduxjs/toolkit";
import {loginUserReducer} from "../state-slices/auth/auth";

export const store = configureStore({

    reducer:{
        // auth: loginUserReducer
    }

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;