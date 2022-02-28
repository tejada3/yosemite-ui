import {User} from "../../models/user"


// @ts-ignore
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";

interface State {
    authUser: User | undefined
    email: string;
    isAuthenticated: boolean;
}

const initialState: State = {
    authUser: undefined,
    isAuthenticated: false,
    email: "",
}

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers:{

        loginUserReducer: (state,response:any) => {
            let email = response.payload
            let token = response.payload
            console.log(email)
            console.log(token)
            console.log("hhhhhh")

            state.authUser = new User(email, token)
            state.isAuthenticated = true

        }

    }



})

export const {loginUserReducer} = authSlice.actions;
export const authState = (state: RootState) => state.auth;
export default authSlice.reducer