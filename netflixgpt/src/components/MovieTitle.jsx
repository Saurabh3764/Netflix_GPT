import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import useGetCurrentMovieGenres from '../utils/custom_hooks/useGetCurrentMovieGenres';

const MovieTitle = () => {
  const movie = useSelector((state) => state?.currentmovieandvideo?.currentmovie);
   let genrelist=null
   genrelist = useGetCurrentMovieGenres(movie)
    
  return movie && genrelist && (
    <div className='flex flex-col  bg-black text-white p-1 -mt-7 bg-gradient-to-b from-black z-60 md:-mt-55  '>
      <div className='flex flex-col sm:w-5/12 bg-gradient-to-r from-black '>
        <h1 className='text-sm p-1 md:text-3xl'>{movie?.original_title ? movie?.original_title : movie?.title}</h1>
        <p className='p-1 md:p-2 text-xs md:text-lg '>{movie?.overview}</p>
      </div>
      <div className='flex flex-row p-1 bg-gradient-to-r from-black ml-0'>
        { 
          genrelist.map((genre) => (
             <p key={genre?.name} className='text-red-500 text-sm m-1 p-1 pl-0  md:text-xl'>{ genre?.name}</p>
          ))
        }
      </div>
    </div>
  )
}

export default MovieTitle