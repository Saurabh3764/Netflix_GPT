import React from 'react'
import MovieVideo from './MovieVideo';
import MovieTitle from './MovieTitle';
import usegetCurrentMovie from '../utils/custom_hooks/usegetCurrentMovie';
import usegetCurrentVideo from '../utils/custom_hooks/usegetCurrentVideo';
 

const PrimaryContainer = () => {

  return (
    <div className=''>
        <MovieVideo/>
        <MovieTitle/>
    </div>
  )
}

export default PrimaryContainer;