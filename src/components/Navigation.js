import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css';

const Navigation = () => {
    return (  
        <div className="navigation">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    )
}

export default Navigation
