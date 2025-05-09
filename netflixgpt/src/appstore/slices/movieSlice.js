import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        now_playing :null,
        top_rated : null,
        upcoming : null,
        popular : null
    },

    reducers : {
         addNowPlayingMovies : (state,action) =>{
            state.now_playing = action.payload
           
         },
         addTopratedMovies : (state,action) =>{
            state.top_rated =action.payload 
           
         },
         addUpcomingMovies : (state,action) =>{
            state.upcoming = action.payload
           
         },
         addPopularMovies : (state,action) =>{
            state.popular =action.payload
           
         }
    }

})

export const {addNowPlayingMovies,addTopratedMovies,addPopularMovies,addUpcomingMovies} =  movieSlice.actions
export default movieSlice.reducer