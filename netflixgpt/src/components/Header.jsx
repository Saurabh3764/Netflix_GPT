import React from 'react'
import { LOGO, USER } from '../utils/constants'
import { useSelector } from 'react-redux'


const Header = () => {
  const user = useSelector((state)=>state?.user)
  return (
    <div className=' flex justify-between absolute z-60 w-screen'>
      <img src={LOGO} alt='logo' className='w-30  bg-gradient-to-b from-black' />
      {
        user && 
        <div className='p-1 flex flex-col justify-center items-center '>
         <img src={USER} alt='user' className=' w-5 h-5' />  
         <button className='bg-white p-1 text-xs mt-1'>Sign out</button>
       </div> 
      }
    </div>
  )
}

export default Header