import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";

interface State {
    updated: number;
}

const initialState: State = {
    updated: 0
}

export const activitiesSlice = createSlice({
    name: "updated activites",
    initialState,
    reducers:{
        activitesReducer: (state: State) => {
            state.updated++;
        }
    }
})

export const {activitesReducer} = activitiesSlice.actions
export const activitiesState = (state: RootState) => state.activities 
export default activitiesSlice.reducer
