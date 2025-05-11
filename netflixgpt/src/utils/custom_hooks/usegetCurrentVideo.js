import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_HEADER_OPTIONS, MOVIE_VIDEOS } from "../constants";
import { addCurrentVideo } from "../../appstore/slices/currentMovieAndVideoSlice";

const usegetCurrentVideo = ()=>{
    const movie = useSelector(state=>state?.currentmovieandvideo?.currentmovie);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchVideos()
    },[movie])

    const fetchVideos = async ()=>{
         const response = movie && await fetch(MOVIE_VIDEOS + movie?.id + '/videos',API_HEADER_OPTIONS);
        const data = movie && await response.json();
        const filteredVideos = data?.results?.filter((video)=>video?.type === 'Trailer' || video?.type === 'Teaser');
        const video = filteredVideos && filteredVideos?.[Math.floor(Math.random() * filteredVideos.length)]
        dispatch(addCurrentVideo(video ? video : data?.results?.[0]))
    }
}
export default usegetCurrentVideo;