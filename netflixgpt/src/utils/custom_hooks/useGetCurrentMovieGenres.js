import { useState } from "react";
import { useSelector } from "react-redux";

const useGetCurrentMovieGenres =(movie)=>{
  const genres = useSelector((state) => state?.movies?.genres);
  let genrelist =[]
        
      movie && movie?.genre_ids?.map((id) => {
      const genre =  genres?.find((item) => item?.id === id);
      if (!genre?.name?.includes(" ")&& genrelist.length <3) {
        genrelist.push(genre);
      }
    })
 return genrelist
}

export default useGetCurrentMovieGenres