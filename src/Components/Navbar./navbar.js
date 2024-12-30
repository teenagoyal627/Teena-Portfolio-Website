import React, { useState } from 'react'
import './navbar.css'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Navbar = () => {

    const[click,setClick]=useState(false);
    const[color,setColor]=useState(false)
   
    const handleClick =()=>{
       setClick(!click)
    }
    const changeColorHandler=()=>{
      if(window.scrollY >=100){
        setColor(true)
      }else{
        setColor(false)
      }
    }
    window.addEventListener("scroll",changeColorHandler)
  return (
    <div className={color ? "header header-bg" : "header"}>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/education'>Education</Link></li>
        <li><Link to ='/experience'>Experience</Link></li>
        <li><Link to ='/skills'>Skills</Link></li>
        <li><Link to ='/project'>Project</Link></li>

      </ul>
      <div className="hamburger" onClick={handleClick}>
      {click ? (<FaTimes size ={20} style={{color:"white"}}/>
       ):(<FaBars size ={20} style={{color:"white"}}/>
)}

      </div>
    </div>
  )
}

export default Navbar
