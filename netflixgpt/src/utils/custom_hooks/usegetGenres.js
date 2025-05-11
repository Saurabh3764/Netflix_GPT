import { useEffect } from "react"
import { API_HEADER_OPTIONS, GENRES } from "../constants"
import { useDispatch } from "react-redux"
import { addgenres } from "../../appstore/slices/movieSlice"

const usegetGenres = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        fetchGenres()
    },[])

    const fetchGenres = async ()=>{
        const response = await fetch(GENRES, API_HEADER_OPTIONS);
        const data = await response.json();
        dispatch(addgenres(data?.genres));
    }
}
export default usegetGenres