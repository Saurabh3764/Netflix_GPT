import React from 'react'
import Header from './Header';
import PrimaryContainer from './PrimaryContainer'
import useGetMovieList from '../utils/custom_hooks/useGetMovieList'; 
import usegetCurrentMovie from '../utils/custom_hooks/usegetCurrentMovie';

const Body = () => {
  useGetMovieList("now_playing");
  useGetMovieList('top_rated');
  useGetMovieList('popular');
  useGetMovieList('upcoming');
 
  return (
    <div className='flex flex-col '>
        <Header/>
        <PrimaryContainer/>
    </div>
  )
}

export default Body;