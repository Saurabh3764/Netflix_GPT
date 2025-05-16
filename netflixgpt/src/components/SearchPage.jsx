import MovieList from "./MovieList"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { API_HEADER_OPTIONS, SEARCH_MOVIE_API } from "../utils/constants"
import { addSearchMovies } from "../appstore/slices/searchMovieResultsSlice"
import NoSearchResults from "./NoSearchResults"
 

const SearchPage = () => {
 const dispatch = useDispatch();
 const searchtext = useRef(null);
 const [searchresults,SetSearchresults]  = useState()
 const handleSearchClick = ()=>{
   fetchSearchResults()
 }
 const fetchSearchResults = async ()=>{
   
        const response = await fetch(SEARCH_MOVIE_API+"?query="+searchtext.current.value+"&include_adult=false&language=en-US",API_HEADER_OPTIONS)
        const data = await response.json();
        dispatch(addSearchMovies(data?.results))
        SetSearchresults(data?.results)     
    }
 
 
  return   (
    <div className={' flex flex-col  items-center  h-screen bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_small.jpg)] '}>
      <div className='flex flex-col mt-20   bg-black/80 mb-10 text-white  p-8 justify-center items-center rounded-lg   sm:w-6/12'>
        <input type='text' className='border-1 border-gray-400  rounded-md text-l p-2 md:pr-40 sm:pr-30' placeholder='What is on your mind?' ref={searchtext} />
        <div className='text-center mt-2'>
          <button className=' border-1 m-1 p-1 rounded-lg hover:bg-red-500 text-gray-300' onClick={()=>handleSearchClick()} >Search </button>
        </div>
      </div>
      <div className="bg-black/90  p-2 ">
        {searchresults?.length > 0 ?  <MovieList name="Search Results" movies={searchresults}/> : <NoSearchResults/>}
     
      </div>
    </div>
  )
}

export default SearchPage