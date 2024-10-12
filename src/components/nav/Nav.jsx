import React from 'react'
import './nav.css'
import logo from '../../assets/images/aa38384d3942a55696d8070552aed2f4c190fc14.jpg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <img
         className='logo'
         src={logo}
         alt='Logo'
        />
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/Reservation'>Reservation</Link></li>
            <li><Link to='/orderonline'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>

    </nav>
  )
}

export default Nav;
