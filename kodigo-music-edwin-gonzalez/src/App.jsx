import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Explore from './pages/Explore.jsx';

function App() {
  return(
   <>
   <Router>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Explore' element={<Explore/>}/>
      <Route path='/Search' element={<Search/>}/>
    </Routes>
   </Router>
   </>
    
  )
}

export default App
