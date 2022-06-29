import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/student.jpg'
import Socials from './socials'
const header = () => {
  return (
    <header>
      <div id='home' className="header header_container">
        <h5>Hello I'm</h5>
        <h1>NIKHIL TIWARI</h1>
        <h5 className="text-light">Front-End Web-Developer</h5>
        <CTA/>


        <div className="me">
          <img src={ME} alt="Nikhil Tiwari Web Developer" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      <Socials/>
      </div>
    </header>
  )
}

export default header