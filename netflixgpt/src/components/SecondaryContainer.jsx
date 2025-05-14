import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(state => state?.movies);
   
  return movies && (
    <div className=' bg-black flex-col w-full '>
      <MovieList name={"Now Playing"} movies={movies?.now_playing} />
      <MovieList name={"Upcoming"} movies={movies?.popular} />
      <MovieList name={"Top Rated"} movies={movies?.upcoming} />
      <MovieList name={"Popular"} movies={movies?.top_rated} />
    </div>
  )
}

export default SecondaryContainer