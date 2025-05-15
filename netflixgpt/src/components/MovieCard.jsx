import React from 'react'
import { IMAGE_PATH } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addCurrentMovie } from '../appstore/slices/currentMovieAndVideoSlice'

const MovieCard = ({movie,poster_path}) => {
 const dispatch = useDispatch()
 const handleClick = ()=>{
    dispatch(addCurrentMovie(movie));
    console.log(movie)
    window.scrollTo({ top: 0, behavior: 'smooth' });
 }
  return (
        <img className=' w-20  cursor-pointer sm:w-30 sm:mx-2 sm:p-1   mx-1 hover:scale-110 ' src={IMAGE_PATH + poster_path} alt = 'moviecard' onClick={()=>{handleClick()}} />  
  )
}

export default MovieCard