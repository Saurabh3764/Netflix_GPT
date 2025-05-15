import { useEffect } from "react";
import { API_HEADER_OPTIONS, MOVIES_API } from "../constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopratedMovies, addUpcomingMovies } from "../../appstore/slices/movieSlice";

const useGetMovieList = (movieType)=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        fetchMovies()
    },[])

    const fetchMovies = async ()=>{
        const response = await fetch(MOVIES_API + movieType +'?language=hindi&region=in', API_HEADER_OPTIONS)
        const data = await response.json();
        if(movieType === 'now_playing') dispatch(addNowPlayingMovies(data?.results));
        if(movieType === 'top_rated') dispatch(addTopratedMovies(data?.results));
        if(movieType === 'upcoming') dispatch(addUpcomingMovies(data?.results));
        if(movieType === 'popular') dispatch(addPopularMovies(data?.results));
        
    }
}

export default useGetMovieList;