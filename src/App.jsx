import { useState } from 'react'
import Navbar from './navbar.jsx'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Index from "./index"
import About from "./about"
import Menu from "./menu"
import Contact from "./contact"


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter basename="/ice-cream-website">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/About" element={<About/>}/>
       <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Contact" element={<Contact/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
