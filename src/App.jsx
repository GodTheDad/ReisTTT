import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './Pages/Homepage.jsx';
import {Routes, Route } from "react-router-dom";
import './App.css'
import Gallery from './Pages/Gallery.jsx';

function App() {

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/gallery" element={<Gallery/>} />
        {/* <Route path="/signup" element={<Signup/>} />
        <Route path ="/about" element={<AboutPage/>} />  */}
      </Routes>
    </>
  )
}

export default App
