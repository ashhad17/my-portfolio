import React from 'react'
import './WorkCard.css'
// import Image from '../assets/project.jpg'
import { NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// NavLink
export default function WorkCard(props) {
  return (
<div className="work-container">
<div className="project-card">
            <img src={props.imgsrc} alt="" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.desc}</p>
                <div className="pro-btns">
                    {/* <NavLink to="url.com" target='__blank' className="btn">View</NavLink> */}
                    <NavLink to={props.source} target='__blank' className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    </div>

  )
}
