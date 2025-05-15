import { useState } from "react";
import { useSelector } from "react-redux";

const useGetCurrentMovieGenres =(movie)=>{
  const genres = useSelector((state) => state?.movies?.genres);
  const [genrelist, setgenrelist] = useState([])

      movie &&genres && movie?.genre_ids?.map((id) => {
      const genre =  genres.find((item) => item?.id === id);
      if (!genre?.name?.includes(" ") && genrelist.length <4) {
        genrelist.push(genre);
      }
    })
    console.log(genrelist)
 return genrelist
}

export default useGetCurrentMovieGenres