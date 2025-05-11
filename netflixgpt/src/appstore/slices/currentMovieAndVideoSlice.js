import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

const currentMovieAndVideoSlice = createSlice({
    name : 'currentmovieandvideo',
    initialState : {
        currentmovie : null,
        curretvideo : null
    },
    reducers : {
        addCurrentMovie : (state,action) =>{
            state.currentmovie =  action.payload
        },
        addCurrentVideo : (state,action) =>{
            state.curretvideo =  action.payload
        },
        clearCurrentMovieandVidoSlice : (state,action) =>{
            return null;
        }
    }
})
export const {addCurrentMovie,addCurrentVideo,clearCurrentMovieandVidoSlice} = currentMovieAndVideoSlice.actions;
export default currentMovieAndVideoSlice.reducer