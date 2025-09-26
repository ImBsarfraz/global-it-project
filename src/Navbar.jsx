import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="brand">
        <h2>Global IT Services</h2>
        <div className="enquiry">
          <img src="https://cdn-icons-png.flaticon.com/512/7269/7269674.png" alt="Enquiry" />
          <div className="enquiry_txt">
            <h3>Get a free enquiry</h3>
            <h4>+91 90035378984</h4>
          </div>
          <Link to="/Contact"><button>Get a Quote ↗</button></Link>
        </div>
      </div>

      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="link"><li>Home</li></Link>

          <li className="dropdown" ref={dropdownRef}>
            <button className="dropdown-btn" onClick={toggleDropdown}>
              Services
            </button>
            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <Link to="/Software" className='link_menu'><li>Software Service</li></Link>
              <Link to="/Dataservice" className='link_menu'><li>Data Service</li></Link>
              <Link to="/Digital" className='link_menu'><li>Digital Platform</li></Link>
              <Link to="/Cloud" className='link_menu'><li>Cloud Service</li></Link>
              <Link to="/Uiux" className='link_menu'><li>UI & UX Design</li></Link>
              <Link to="/Softwaretst" className='link_menu'><li>Software Testing</li></Link>
              <Link to="/Embedded" className='link_menu'><li>Embedded System</li></Link>
              <Link to="/Maintance" className='link_menu'><li>Maintenance & Support</li></Link>
              <Link to="/Iot" className='link_menu'><li>IOT (Internet of Things)</li></Link>
            </ul>
          </li>

          <Link to="/Careers" className='link'><li>Careers</li></Link>
          <Link to="/CareerGuidance" className='link'><li>Career Guidance</li></Link>
          <Link to="/Contact" className='link'><li>Contact Us</li></Link>
        </ul>
      </nav>
    </>

  );
}

export default Navbar;
