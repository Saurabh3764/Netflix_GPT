
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Body from './components//Body'
 
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/browse' element={<Body/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
