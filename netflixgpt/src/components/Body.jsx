import React, { useEffect } from 'react'
import Header from './Header';
import PrimaryContainer from './PrimaryContainer'
import useGetMovieList from '../utils/custom_hooks/useGetMovieList';
import usegetCurrentMovie from '../utils/custom_hooks/usegetCurrentMovie';
import usegetCurrentVideo from '../utils/custom_hooks/usegetCurrentVideo';
import usegetGenres from '../utils/custom_hooks/usegetGenres';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import SearchPage from './SearchPage';
 
 
 

const Body = () => {
  const isSearchMode = useSelector(state=>state?.appdetails?.searchmode)

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
        {
            !isSearchMode  ?
            <>
                <PrimaryContainer />
                <SecondaryContainer/>
            </>
            : 
            <SearchPage/>
        }
    </div>
  )
}

export default Body;