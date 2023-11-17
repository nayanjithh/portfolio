import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import './navbar.css'

export default function Navbar({ callback }){
    const [themeToggle , setThemeToggle] = useState(true);

    return(
        <div className="navbar">
            <span className='Titel' onClick={()=>callback(setThemeToggle(!themeToggle))}>WeBie</span>
            <div className="buttons">
                <NavLink to="/">About me</NavLink>
                <NavLink to="/work">Works</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}