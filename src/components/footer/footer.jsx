import React from 'react'
import './footer.css'

import {SiInstagram} from 'react-icons/si'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiTwitter,FiFacebook} from 'react-icons/fi'

const footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">Nikhil Tiwari</a>
      <ul className="permalinks">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
      <a href="https://facebook.com"><FiFacebook/></a>
      <a href="https://twitter.com/eduNikhil"><SiInstagram/></a>
      <a href="https://instagram.com/au_wild"><FiTwitter/></a>
      </div>

      <div className="footer_copyright">
      <small>&copy; Nikhil Tiwari All Rights Reserved.</small>
      </div>
    </footer>
  )
} 

export default footer