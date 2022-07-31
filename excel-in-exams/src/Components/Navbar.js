import React  from 'react'
import { NavLink } from 'react-router-dom'

 
 export default function Navbar() {
   return (
     <div>
        <div className='navbar'>
            <h1 className='success'>SUCCESS IN YOUR EXAMS .</h1>
            <NavLink to ="home">
              Home
            </NavLink>
            <NavLink to ="about">
              About
            </NavLink>
            <NavLink to ="contact">
              Contact
            </NavLink>
    
        </div>
        
     </div>
   )
 }
 