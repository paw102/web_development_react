import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// 남는 Component 들을 import
import Home from './Components/Home'
import Contact from './Components/Contact'
import PageNotFound from './Components/PageNotFound'
import ContactSeoul from './Components/ContactSeoul'
import ContactLondon from './Components/ContactLondon'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> {' | '}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="seoul" element={<ContactSeoul/>}/>
          <Route path="london" element={<ContactLondon/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
