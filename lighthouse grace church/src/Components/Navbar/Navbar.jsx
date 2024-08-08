import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/loggo.png';
import { Link } from 'react-scroll';

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
    setMenuOpen(!menuOpen);   
 // Toggle the menu open/closed
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
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='ministries' smooth={true} offset={-260} duration={500}>Ministries</Link></li>
        <li><Link to='events' smooth={true} offset={-295} duration={500}>Events</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>
        <li><Link to='location' smooth={true} offset={-260} duration={500}>Location</Link></li>
        <li><Link to='contact' smooth={true} offset={-295} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;