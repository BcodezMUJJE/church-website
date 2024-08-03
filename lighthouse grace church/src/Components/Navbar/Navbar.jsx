import React from 'react';
import './Navbar.css';
import logo from '../../assets/loggo.png';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Ministries</li>
        <li>Events</li>
        <li>About</li>
        <li>Location</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
} 

export default Navbar;