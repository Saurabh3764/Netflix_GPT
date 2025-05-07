import React from 'react'
import { LOGO, USER } from '../utils/constants'

const Header = () => {
  return (
    <div className=' flex justify-between absolute '>
      <img src={LOGO} alt='logo' className='w-2/12  bg-gradient-to-b from-black' />
       {/* <div className='p-1 flex flex-col justify-center items-center '>
         <img src={USER} alt='user' className=' w-5 h-5' />  
         <button className='bg-white p-1 text-xs mt-1'>Sign out</button>
       </div> */}
    </div>
  )
}

export default Header