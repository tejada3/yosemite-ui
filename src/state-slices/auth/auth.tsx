import {User} from "../../models/user"


// @ts-ignore
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";

interface State {
    user: User | undefined
    email: string;
    password:string;
    isAuth: boolean;
}

const initialState: State = {
    user: undefined,
    isAuth: false,
    email: "",
    password: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{

        loginUserReducer: (state,response:any) => {
            let email = response.payload.email
            let token = response.payload.CognitoUserSession.idToken.jwtToken


            state.user = new User(email,false, token)
            state.isAuth=true

        }

    }



})

export const {loginUserReducer} = authSlice.actions;
export const authState = (state: RootState) => state.auth;
export default authSlice.reducer