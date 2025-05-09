import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentMovie } from "../../appstore/slices/currentMovieAndVideoSlice";

const usegetCurrentMovie = ()=>{
    const movielist = useSelector((state)=>state?.movies?.now_playing);
    const dispatch = useDispatch()
    movielist && dispatch(addCurrentMovie(movielist[Math.floor(Math.random() * movielist?.length)]))
 
}
export default usegetCurrentMovie ;