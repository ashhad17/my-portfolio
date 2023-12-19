import './About.css'
import React from 'react'

export default function AboutUs() {
  return (
    
    <div className="about-container">
        <div className="about-card">
            <h2 className="about-heading">Who am I??</h2>
            <p className="about-me">
              I am Mohammed Ashhad, freelancing software developer.
              Love to develop applications with latest technologies.
            </p>
        </div>
        <div className="skill-card">
          <h1 className="skills-heading">
            Skills I have..
          </h1>
          <div className="skills">
            <div className="web"><h5>WebDev</h5></div>
            <div className="android"><h5>Android</h5></div>
            <div className="python"><h5>Python</h5></div>
            <div className="react"><h5>React</h5></div>
            <div className="java"><h5>Java</h5></div>
 
          </div>
        </div>
    </div>
    
  )
}
