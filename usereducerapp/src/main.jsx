import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import App from './App4'
import './index.css'
import { ContextProvider } from './context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
