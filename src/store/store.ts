import { configureStore } from "@reduxjs/toolkit";

import authReducer, {logoutUserReducer} from "../state-slices/auth/auth";
import activitiesReducer from "../state-slices/DaytoDay/Activites";
import  showSnackbar, {setFailureMessage, setInfoMessage, setSuccessMessage }  from "../state-slices/error/error-slice";


export const store = configureStore({

    reducer:{
        auth: authReducer,
        activities: activitiesReducer,
        error: showSnackbar,
        setSuccess: setSuccessMessage,
        setFailure: setFailureMessage,
        setInfo: setInfoMessage
    }

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;