


// @ts-ignore
import {createSlice} from "@reduxjs/toolkit";

interface State {
    email: string;
    password:string;
    isAuth: boolean;
}

const initialState: State = {
    isAuth: false,
    email: "",
    password: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        loginUserReducer: (state,response:any) => {
        }
    }



})