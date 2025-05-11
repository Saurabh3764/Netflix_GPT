import { useDispatch, useSelector } from "react-redux";
import { addCurrentMovie } from "../../appstore/slices/currentMovieAndVideoSlice";
import { useEffect } from "react";

const usegetCurrentMovie = ()=>{
    const movielist = useSelector((state)=>state?.movies?.now_playing);
    const dispatch = useDispatch()
    useEffect(()=>{
        const movie = movielist?.[Math.floor(Math.random() * movielist?.length)]
        movie && dispatch(addCurrentMovie(movie))
    },[movielist])
 
}
export default usegetCurrentMovie ;