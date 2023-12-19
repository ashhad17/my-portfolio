import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavbarStyle.css'
import {FaBars,FaTimes} from "react-icons/fa"
// Link
export default function Navbar() {
 const [click,setClick]=useState(false);
 const handleClick=()=>{
    setClick(!click);
 }
 const [color,setColor]=useState(false)
 const changeColor=()=>
 {
    if(window.scrollY>100)
    {
        setColor(true)
    }
    else{
        setColor(false)
    }
 }
 window.addEventListener("scroll",changeColor);
    return (
    <>
    <div className={color ? ("header header-bg"):("header")}>
        <Link to="/"><h1>Portfolio</h1></Link>
        <ul className={!click?('nav-menu'):('nav-menu active')}>
            <li>
                <Link to='/project'><h5>Project</h5></Link>
            </li><li>
                <Link to='/contact'><h5>Contact</h5></Link>
            </li><li>
                <Link to='/about'><h5>About</h5></Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            
            {
                !click?(<FaBars size={20} style={{color:"#fff"}}></FaBars>
                ):(<FaTimes size={20} style={{color:"#fff"}}></FaTimes>
                )
            }
            </div>
    </div>
    </>
  )
}
