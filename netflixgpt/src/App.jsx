
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Body from './components//Body'
import { Provider, useDispatch } from 'react-redux'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { auth } from './utils/firebase'
import { loginUser, logoutUser } from './appstore/slices/userSlice'

function App() {

  return (
    <>
    
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/browse' element={<Body />} />
          </Routes>
        </BrowserRouter>
  

    </>
  )
}

export default App
