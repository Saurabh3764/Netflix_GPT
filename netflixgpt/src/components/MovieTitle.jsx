import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const MovieTitle = () => {
  const movie = useSelector((state) => state?.currentmovieandvideo?.currentmovie);
  const genres = useSelector((state) => state?.movies?.genres);
  const [genrelist, setgenrelist] = useState([])

  useEffect(() => {
    movie && movie?.genre_ids?.map((id) => {
      const genre = genres && genres.find((item) => item?.id === id);
      if (!genre?.name?.includes(" ")) {
        console.log(genre)
        genrelist.push(genre);
      }

    })

  }, [])

  if (movie === null || genrelist == null) return;
  return (
    <div className='flex flex-col  bg-black text-white p-1 -mt-7 bg-gradient-to-b from-black z-60 md:-mt-55  '>
      <div className='flex flex-col sm:w-5/12 bg-gradient-to-r from-black '>
        <h1 className='text-sm p-1 md:text-3xl'>{movie?.original_title ? movie?.original_title : movie?.title}</h1>
        <p className='p-1 md:p-2 text-xs md:text-lg '>{movie?.overview}</p>
      </div>
      <div className='flex flex-row p-1 bg-gradient-to-r from-black ml-0'>
        {genrelist &&
          genrelist.map((genre, index) => (
             <h1 key={genre?.name} className='text-red-500 text-sm m-1 p-1 pl-0  md:text-xl'>{ genre?.name}</h1>
          ))
        }
      </div>
    </div>
  )
}

export default MovieTitle