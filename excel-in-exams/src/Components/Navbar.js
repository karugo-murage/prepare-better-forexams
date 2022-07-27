 import React from 'react'
import Units from './Units'
 
 export default function Navbar() {
   return (
     <div>
        <div className='navbar'>
            <h1 className='success'>SUCCESS IN YOUR EXAMS .</h1>
            <Units unit= "Artificial Intelligence"/>
            <Units unit= "Integral Calculus"/>
            <Units unit= "Computer Architecture"/>
            <Units unit= "Computer Networks"/>
        </div>
        
     </div>
   )
 }
 