import React from 'react'
import MovieCard from './MovieCard'
 
const MovieList = ({name,movies}) => {
   
  return movies && (   
     <div className='flex flex-col overflow-x-scroll no-scrollbar'>
        <h1 className='text-white m-2 p-1 '>{name}</h1>
        <div className='flex flex-row  p-2  '>
            {
              movies.map((movie)=>(
                    movie?.poster_path && <MovieCard key={movie?.id} movie={movie} poster_path = {movie?.poster_path} />
              ))
            }
        </div>
     </div>
        
  )
}

export default MovieList