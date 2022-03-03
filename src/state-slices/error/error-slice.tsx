import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { AlertColor, Color } from '@mui/material';


interface State {
    errorMessage: string;
    errorType: boolean;
    errorColor: AlertColor;
}

const initialState: State = {
    errorMessage: "",
    errorType: false,
    errorColor: 'info'

}

class errorInput {
    message!: string;
    errorColor: AlertColor | undefined;
}
export const errorSlice = createSlice({
    name: "errorM",
    initialState,
    reducers: {
            showSnackbar: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload;
            state.errorType = true;
        },
            hideErrorMessage: (state) => {
            state.errorMessage = "";
            state.errorType = false;

        },setSuccessMessage: (state) => {
            state.errorColor = "success";

        }, setFailureMessage: (state) => {
            state.errorColor = "error";
        }, setInfoMessage: (state) => {
            state.errorColor = "info";
        }



    }
});

export const {showSnackbar, hideErrorMessage, setSuccessMessage, setFailureMessage, setInfoMessage } = errorSlice.actions;

export const errorState = (state: RootState) => state.error;

export default errorSlice.reducer;