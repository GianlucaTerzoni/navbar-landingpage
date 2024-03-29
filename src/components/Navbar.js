import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><a href='/'>Home</a></li>
                <li className='nav-item'><a href='/'>About</a></li>
                <li className='nav-item'><a href='/'>FAQ</a></li>
                <li className='nav-item'><a href='/'>Contact</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#f8f8f8' }} />) : (<FaBars size={30} style={{ color: '#f8f8f8' }} />)}

            </div>
        </div>
    )
}

export default Navbar;
