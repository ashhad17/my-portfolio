import React from 'react'
import './FooterStyle.css'
import {FaHome,FaMailBulk,FaPhone,FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'
export default function Footer() {
  return (
    <>
    <div className="footer">
      <div className="footer-container">
      <div className="left">
<div className="location">
<FaHome size={20} style={{marginRight:"1rem"}}/>
<div>
  <p>Tumkur<br/>
  Karnataka,India</p>
</div>
</div>
<div className="contact">
      
<a href="tel:+91 8197172781"><FaPhone size={20} style={{marginRight:"1rem"}}/></a><p>8197172781</p>
</div>
<div className="mail">
<a href="mailto:al.developer.17@gmail.com" target='__blank'><FaMailBulk size={20} style={{marginRight:"1rem"}}/></a>
<p>al.developer.17@gmail.com</p>
</div>
      </div>
      <div className="right">
          <h5>About Developer</h5>
          <p>This is Mohammed Ashhad,Software Developer.</p>
        <div className="social">
          <a href="https://www.instagram.com/" target='__blank'>
        <FaInstagram  size={30} style={{marginRight:"0.2rem"}}/></a>
        
        <a href="https://www.linkedin.com/in/mohammed-ashhad-706b09230/"><FaLinkedin size={30} style={{marginRight:"0.2rem"}}/></a>
        <a href="https://github.com/ashhad17"><FaGithub size={30} style={{marginRight:"0.2rem"}}/></a>
      </div>
      </div>
      </div>
        
    </div>
    </>
  )
}
