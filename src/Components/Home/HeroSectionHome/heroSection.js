import React from 'react';
import './heroSecitonHome.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
const HeroSectionHome = () => {
  return (
   
    <div className='container'>
      <div className='content'>
        <p>HI, I'M FULL-STACK DEVELOPER</p>
        <h1>Teena Goyal</h1>
        <div className='profile-links'>
          <Link to="mailto:goyalteena8875@gmail.com" ><MdOutlineMailOutline /></Link>
          <Link to='www.linkedin.com/in/teena-goyal-1758b5238' ><FaLinkedin /></Link>
          <Link to="https://github.com/teenagoyal627"><IoLogoGithub /></Link>
          {/* <Link >Resume</Link> */}
        </div>
      </div>
      <div className='profile-image'>
        <img src="Image/profile.jpeg" alt="Teena Goyal" className="profile-img" />
      </div>
    </div>
  );
};

export default HeroSectionHome;
