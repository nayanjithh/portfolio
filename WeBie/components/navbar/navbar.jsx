import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar(){
    return(
        <div className="navbar">
            <span className='Titel'>WeBie</span>
            <div className="buttons">
                <NavLink to="/"><span>About me</span></NavLink>
                <NavLink to="/work"><span>Works</span></NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}