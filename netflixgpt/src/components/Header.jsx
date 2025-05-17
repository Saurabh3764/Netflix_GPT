
import { LOGO, USER } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { loginUser, logoutUser } from '../appstore/slices/userSlice'
import { signOut } from 'firebase/auth'
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { toggleSearchMode } from '../appstore/slices/appDetailsSlice'
import { clearSearchMovies } from '../appstore/slices/searchMovieResultsSlice'




const Header = () => {
  const user = useSelector((state) => state?.user)
  const isSearcMode = useSelector(state=>state?.appdetails?.searchmode)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, phoneNumber } = user
        dispatch(loginUser({ displayName: displayName, email: email, phoneNumber: phoneNumber, photoURL: photoURL }))
        navigate('/browse')
      } else {
        navigate('/')
        dispatch(logoutUser());
      }
    });
    return () => unsubscribe()
  }, [])

  const handleSearchClick = ()=>{
    dispatch(toggleSearchMode())
    if(isSearcMode)
    {
       dispatch(clearSearchMovies())
    }
  }

  const handleSignOut = () => {

    signOut(auth).then(() => {

    }).catch((error) => {

    });
  }
  return (
    <div className=' flex justify-between absolute z-60  w-full bg-gradient-to-b from-black' >
      <img src={LOGO} alt='logo' className='sm:w-30 w-15 bg-gradient-to-b from-black' />

      {
        user != null &&
        <div className='flex flex-row '>
          <button className='sm:mx-2 mx-1 pb-4 text-xl sm:px-3 px-1 cursor-pointer' onClick={()=>handleSearchClick()}>{!isSearcMode ? "🔍" : "🔙"}</button>
          <div className='p-1 flex flex-col justify-center items-center '>
            <img src={USER} alt='user' className=' w-5 h-5' />
            <button className='bg-white p-1 text-xs mt-1 cursor-pointer hover:border-gray-400' onClick={() => handleSignOut()}>Sign out</button>
          </div>
        </div>

      }

    </div>
  )
}

export default Header