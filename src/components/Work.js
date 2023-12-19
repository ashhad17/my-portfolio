import './WorkStyle.css'
import React from 'react'
// import { NavLink } from 'react-router-dom'
import WorkCard from './WorkCard'
// // import Image1 from '../assets/code.jpg'
// // import Image2 from '../assets/about.jpg'
// // import Image3 from '../assets/contact.jpg'
// // import ProjectCardData from './WorkCardData'
// import pro1 from '../assets/project.jpg'
// import pro2 from '../assets/project.jpg'
// import pro3 from '../assets/project.jpg'
import ProjectCardData from './WorkCardData'
export default function Work() {
  return (
    
<div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
      {
      ProjectCardData.map((val,ind)=>{
        // {console.log(val.imgsrc+"\n"+val.title+"\n"+val.desc);}
        return(
          <WorkCard 
          imgsrc={val.imgsrc}
          title={val.title.length>12?val.title.slice(0,14)+"...":val.title}
          desc={val.desc.length>120?val.desc.slice(0,120)+"...":val.desc}
          source={val.source}/>
        )
      })}
    </div>
</div>
  )
}
