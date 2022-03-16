import {User} from "../../models/user"


// @ts-ignore
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";

interface State {

    authUser: User | undefined;
    email: string;
    isAuth: boolean;
    token: string;
}

const initialState: State = {
    authUser: undefined,
    isAuth: false,
    email: "",
    token: ""

}

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers:{

        loginUserReducer: (state,response:any) => {
            state.email = response.payload.accessToken.payload.username
            state.token = response.payload.accessToken.jwtToken

            state.authUser = new User(response.payload.email, true, response.payload.accessToken.jwtToken)
            state.isAuth = true
        },
        logoutUserReducer: (state)=>{
            state.authUser = undefined
            state.isAuth = false
            state.email = ""
            state.token=""
        }

    }

})

export const {loginUserReducer, logoutUserReducer} = authSlice.actions;
export const authState = (state: RootState) => state.auth;
export default authSlice.reducer