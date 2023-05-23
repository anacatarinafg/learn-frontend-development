import React from 'react';
import './navbar.css';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <h2 className='navbar__headline'>hands-on-learning</h2>
                <div className='navbar__menu'><HiOutlineMenuAlt3 className='navbar__menuIcon' /><mark></mark></div>
            </nav>
        </header>
    )
}

export default Navbar