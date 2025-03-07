import React from 'react'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Error from './Error'

const Routing = () => {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/home" element={< Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="*" element={<Error/>} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default Routing
