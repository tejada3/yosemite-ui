import {User} from "../../models/user"


// @ts-ignore
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";

interface State {
    email: string;
    isAuth: boolean;
    token: string;
}

const initialState: State = {
    isAuth: false,
    email: "",
    token: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{

        loginUserReducer: (state,response:any) => {

            state.email = response.payload.email
            state.token = response.payload.accessToken.jwtToken
            state.isAuth = true
        }

    }



})

export const {loginUserReducer} = authSlice.actions;
export const authState = (state: RootState) => state.auth;
export default authSlice.reducer