import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import moviesReducer from './slices/movieSlice'
import currentmovieandvideoReducer from './slices/currentMovieAndVideoSlice'

const appstore = configureStore({
        reducer : {
            user : userReducer,
            movies : moviesReducer,
            currentmovieandvideo : currentmovieandvideoReducer
        },
        middleware : (getDefaultMiddleware) =>
            getDefaultMiddleware({
              serializableCheck:  false
            }),
})

export default appstore;