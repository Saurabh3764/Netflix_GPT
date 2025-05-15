import { createSlice } from "@reduxjs/toolkit";

const appDetailsSlice = createSlice({
        name : 'appdetails',
        initialState : {
            searchmode : false
        },
        reducers : {
            toggleSearchMode : (state) =>{
                state.searchmode = !state.searchmode
            }
        }
})
export const {toggleSearchMode} = appDetailsSlice.actions
export default appDetailsSlice.reducer 