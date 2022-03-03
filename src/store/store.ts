import { configureStore } from "@reduxjs/toolkit";

import authReducer, {logoutUserReducer} from "../state-slices/auth/auth";
import activitiesReducer from "../state-slices/DaytoDay/Activites";


export const store = configureStore({

    reducer:{
        auth: authReducer,
        activities: activitiesReducer
    }

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;