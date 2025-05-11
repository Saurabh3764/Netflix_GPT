import React, { useEffect } from 'react'
import Header from './Header';
import PrimaryContainer from './PrimaryContainer'
import useGetMovieList from '../utils/custom_hooks/useGetMovieList';
import usegetCurrentMovie from '../utils/custom_hooks/usegetCurrentMovie';
import usegetCurrentVideo from '../utils/custom_hooks/usegetCurrentVideo';
import usegetGenres from '../utils/custom_hooks/usegetGenres';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../appstore/slices/userSlice';
 
 

const Body = () => {
   
  useGetMovieList("now_playing");
  useGetMovieList('top_rated');
  useGetMovieList('popular');
  useGetMovieList('upcoming');
  usegetGenres()
  usegetCurrentMovie();
  usegetCurrentVideo();

 

  return (
    <div className='flex flex-col   '>
    
        <Header />
        <PrimaryContainer />
 

    </div>
  )
}

export default Body;