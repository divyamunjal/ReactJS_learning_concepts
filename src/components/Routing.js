import React from 'react'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Error from './Error'
import Signup from './Signup'
import Login from './Login'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/home" element={< Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="*" element={<Error/>} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default Routing
