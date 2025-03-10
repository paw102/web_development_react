import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import App from './App2.tsx'
// import './index.css' -> 얘 사용안하고 vite 에서 미리 정의 된 스타일 사용 안 할거임.

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
