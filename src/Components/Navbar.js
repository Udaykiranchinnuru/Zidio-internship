import React from 'react';
import { NavLink } from 'react-router-dom';
import i from './Image.jpg'
import j from './Image1.webp'
import k from './Image2.webp'


function Navbar() {
  return (
  <div>
    <nav className="bg-green-400 py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-white font-bold text-2xl">Zidio Internship</div>
        <ul className="font-bold text-xl flex space-x-4 text-white">
          <li className='text-bold hover:text-gray-300'>
            <NavLink to="/Templates">Templates</NavLink>
          </li>
          <li className='hover:text-gray-300'>
            <NavLink to="/About us">About us</NavLink>
          </li>
          <li className='hover:text-gray-300'>
            <NavLink to="/contact us">contact us</NavLink>
          </li>
        </ul>       
      </div>
    </nav>
      <div className="mt-16 flex justify-center items-center">
      <div className="flex space-x-16">
        <img src={i} alt="Placeholder 1" className="w-1/4 h-auto rounded-md" />
        <img src={j} alt="Placeholder 2" className="w-1/4 h-auto rounded-md" />
        <img src={k} alt="Placeholder 3" className="w-1/4 h-auto rounded-md" />
      </div>
      </div>
      <div className="mt-16 flex justify-center items-center">
      <div className="flex space-x-96">
        <NavLink to="/Choose" className="w-full h-12 bg-green-500 text-white py-4 rounded">
          Choose
        </NavLink>
        <NavLink to="/Choose" className="w-full h-12 bg-green-500 text-white py-4 rounded">
          Choose
        </NavLink>
        <NavLink to="/Choose" className="w-full h-12 bg-green-500 text-white py-4 rounded">
          Choose
        </NavLink> 
      </div>
      </div>
    </div>
  )
}
export default Navbar;