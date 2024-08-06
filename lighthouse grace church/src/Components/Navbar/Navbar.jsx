import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/loggo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/closed
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={menuOpen ? 'active' : ''}>
        <li>Home</li>
        <li>Ministries</li>
        <li>Events</li>
        <li>About</li>
        <li>Location</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;