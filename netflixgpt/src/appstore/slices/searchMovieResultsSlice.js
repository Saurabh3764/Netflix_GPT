import { createSlice } from "@reduxjs/toolkit";

const searchMovieResultsSlice = createSlice({
    name : 'serachedmovie',
    initialState : null,
    reducers :{
        addSearchMovies : (state,action)=>{
            return action.payload
        },
        clearSearchMovies : ()=>{
            state=null;
        }
    }
})  
export const {addSearchMovies,clearSearchMovies} = searchMovieResultsSlice.actions
export default searchMovieResultsSlice.reducer