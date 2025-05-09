import React from 'react'
import MovieVideo from './MovieVideo';
import MovieTitle from './MovieTitle';
import usegetCurrentMovie from '../utils/custom_hooks/usegetCurrentMovie';
 

const PrimaryContainer = () => {
  usegetCurrentMovie();
  
  return (
    <div className='w-screen '>
        <MovieVideo/>
        <MovieTitle/>
    </div>
  )
}

export default PrimaryContainer;