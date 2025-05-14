
import { LOGO, USER } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import {  loginUser, logoutUser } from '../appstore/slices/userSlice'
import { signOut } from 'firebase/auth'
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
 


const Header = () => {
  const user = useSelector((state) => state?.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {displayName, email , photoURL, phoneNumber} = user
         dispatch(loginUser({displayName : displayName , email : email , phoneNumber : phoneNumber, photoURL : photoURL}))
         navigate('/browse')
      } else {
        navigate('/')
        dispatch(logoutUser());  
      }
    });
    return ()=>unsubscribe()
  },[])

  const handleSignOut =  () => {
     
    signOut(auth).then(() => {
    
    }).catch((error) => {

    });
  }
  return (
    <div className=' flex justify-between absolute z-60 w-screen bg-gradient-to-b from-black' >
      <img src={LOGO} alt='logo' className='sm:w-30 w-15 bg-gradient-to-b from-black' />

      {
        user != null &&
        <div className='p-1 flex flex-col justify-center items-center '>
          <img src={USER} alt='user' className=' w-5 h-5' />
          <button className='bg-white p-1 text-xs mt-1 cursor-pointer hover:border-gray-400' onClick={() => handleSignOut()}>Sign out</button>
        </div>
      }

    </div>
  )
}

export default Header