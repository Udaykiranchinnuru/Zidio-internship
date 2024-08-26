import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import Register from './Components/Register';
import Login from './Components/Login';
import Choose from './Components/Choose';
import Personal from './Components/Personal';
import Work from './Components/Work';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Resume from './Components/Resume';


const App = () => {
 

  return (
    <div>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/Choose" element={<Personal/>}/>
        <Route path="/Personal" element={<Personal/>}/>
        <Route path="/Work" element={<Work/>}/>
        <Route path="/Education" element={<Education/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Resume" element={<Resume/>}/>
      </Routes>
    </div>
    
    </div>

  )
}

export default App;