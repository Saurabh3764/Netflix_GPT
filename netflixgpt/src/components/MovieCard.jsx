import React from 'react'
import { IMAGE_PATH } from '../utils/constants'

const MovieCard = ({poster_path}) => {
 
  return (
     <img className='sm:w-30 sm:mx-2 sm:p-1 w-20 mx-1' src={IMAGE_PATH + poster_path} alt = 'moviecard' />
  )
}

export default MovieCard