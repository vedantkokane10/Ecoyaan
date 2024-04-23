import React, { useState } from 'react';
import './style.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`Navbar-body ${menuOpen ? 'menu-open' : ''}`}>
      <div className='left-section'>
        <h3 className='left-text'> <a href='home'>Home</a> </h3>
        <h3 className='left-text'> <a href='about'>About</a></h3>
      </div>
      <div className='logo-section'>
        <h1 className='logo-text'> &#127808; Ecoyaan</h1>
      </div>
      <div className='right-section'>
        <h3 className='right-text'> Sell </h3>
        <h3 className='right-text'> Careers</h3>
      </div>
      <div className='hamburger-menu' onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <h3 className='left-text'> <a href='home'>Home</a> </h3>
        <h3 className='left-text'> <a href='about'>About</a></h3>
        <h3 className='right-text'> Sell </h3>
        <h3 className='right-text'> Careers</h3>
      </div>
    </div>
  );
}
