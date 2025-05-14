import React, { useEffect } from 'react'
import Header from './Header';
import PrimaryContainer from './PrimaryContainer'
import useGetMovieList from '../utils/custom_hooks/useGetMovieList';
import usegetCurrentMovie from '../utils/custom_hooks/usegetCurrentMovie';
import usegetCurrentVideo from '../utils/custom_hooks/usegetCurrentVideo';
import usegetGenres from '../utils/custom_hooks/usegetGenres';
import SecondaryContainer from './SecondaryContainer';
 
 
 

const Body = () => {
   
  useGetMovieList("now_playing");
  usegetCurrentMovie();
  usegetCurrentVideo();
  useGetMovieList('top_rated');
  useGetMovieList('popular');
  useGetMovieList('upcoming');
  usegetGenres()
 

  return (
    <div className=' '>
        <Header />
        <PrimaryContainer />
        <SecondaryContainer/>
    </div>
  )
}

export default Body;