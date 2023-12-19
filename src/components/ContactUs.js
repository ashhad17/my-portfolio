import './Contact.css'
import React from 'react'

export default function ContactUs() {
  return (
    <div className="contact-container">
        <div className="form">
        <form action="">
        <label htmlFor="name">FullName: </label>
            <input placeholder='Enter full name..' type="text" name="fullname" id="name" />
            <label htmlFor="sub">Subject: </label>
            <input placeholder='Enter reason for contacting..' type="text" name="subject" id="sub" />
            <label htmlFor="mail">Email: </label>
            <input placeholder='Enter working mail...' type="text" name="email" id="mail" />
            <label htmlFor="desc">Description: </label>
            <textarea placeholder='Enter your query in brief..' rows={6} type="text" name="description" id="desc" />
            <button className="btn">Submit</button>
        </form></div>
    </div>
  )
}
