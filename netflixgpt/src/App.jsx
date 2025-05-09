
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Body from './components//Body'
import { Provider } from 'react-redux'
import appstore from './appstore/appstore'
 
function App() {
  

  return (
    <>
      <Provider store={appstore}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/browse' element={<Body/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
      
    </>
  )
}

export default App
