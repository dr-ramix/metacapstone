import React from 'react'
import './nav.css'
import logo from '../../assets/images/aa38384d3942a55696d8070552aed2f4c190fc14.jpg';

const Nav = () => {
  return (
    <nav>
        <img
        src={logo}
         alt='Logo'
        />
        <ul>
            <li><a href='./' role='button'>Element</a></li>
            <li><a href='./' role='button'>Element</a></li>
            <li><a href='./' role='button'>Element</a></li>
            <li><a href='./' role='button'>Element</a></li>
        </ul>
        <ul>
            <li><a href='./' role='button'>Element</a></li>
            <li><a href='./' role='button'>Element</a></li>
        </ul>
    </nav>
  )
}

export default Nav;
