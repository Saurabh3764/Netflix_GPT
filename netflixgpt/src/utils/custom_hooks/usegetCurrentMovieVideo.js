import { API_HEADER_OPTIONS, MOVIE_VIDEOS } from '../constants'
import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react';
import { addCurrentVideo } from '../../appstore/slices/currentMovieAndVideoSlice';

const usegetCurrentMovieVideo = ()=>{
    const movie = useSelector((state) => state?.currentmovieandvideo?.currentmovie);
    const dispatch  = useDispatch();
  
    useEffect(() => {
        fetchVidoes()  
    }, [movie])
  
    const fetchVidoes = async () => {
  
        const response = await fetch(MOVIE_VIDEOS + movie?.id + "/videos", API_HEADER_OPTIONS);
        const data = await response.json();
        const fillteredVideos = data?.results?.filter((item)=>item.type === "Trailer" || item.type === "Teaser")
        dispatch(addCurrentVideo(fillteredVideos? fillteredVideos[Math.floor(Math.random() * fillteredVideos?.length)] : data?.results[0]))
    }
}
export default usegetCurrentMovieVideo