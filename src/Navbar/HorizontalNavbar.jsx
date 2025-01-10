import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './HorizontalNavbar.css';
import H from '../assets/h.png';
function HorizontalNavbar() {
  
  return (
    <nav className='topNav'>
      <h1 className='logo'>
        <img
        src={H}
        alt='h'
        style={{
          height:"43px",
          width:"40px",
        }}
        />
        arini's Portfolio</h1>
      <div className='navLinks'>
      <ScrollLink to="home" smooth={true} duration={500} offset={-70} className='link'>Home</ScrollLink>
<ScrollLink to="about" smooth={true} duration={500} offset={-70} className='link'>About</ScrollLink>
<ScrollLink to="skills" smooth={true} duration={500} offset={-70} className='link'>Skills</ScrollLink>
<ScrollLink to="projects" smooth={true} duration={500} offset={-70} className='link'>Projects</ScrollLink>
<ScrollLink to="contact" smooth={true} duration={500} offset={-70} className='link'>Contact</ScrollLink>

      </div>
    </nav>
  );
}

export default HorizontalNavbar;
