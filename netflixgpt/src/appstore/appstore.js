import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import moviesReducer from './slices/movieSlice'
import currentmovieandvideoReducer from './slices/currentMovieAndVideoSlice'
import appdetailsReducer from './slices/appDetailsSlice'
import serachedmovieReducer from './slices/searchMovieResultsSlice'

const appstore = configureStore({
        reducer : {
            user : userReducer,
            movies : moviesReducer,
            currentmovieandvideo : currentmovieandvideoReducer,
            appdetails : appdetailsReducer,
            serachedmovie : serachedmovieReducer
        },
        middleware : (getDefaultMiddleware) =>
            getDefaultMiddleware({
              serializableCheck:  false
            }),
})

export default appstore;