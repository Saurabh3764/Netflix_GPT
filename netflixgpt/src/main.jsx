import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import appstore from './appstore/appstore.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={appstore}>
        <App />
      </Provider>
        
  </StrictMode>,
)
