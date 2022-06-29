import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'
import {VscBook} from 'react-icons/vsc'
import {VscTools} from 'react-icons/vsc'
import {RiContactsLine, RiServiceLine} from 'react-icons/ri'

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
<a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ?'active':''}><BiHomeAlt/></a>
<a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ?'active':''}><FaRegUser/></a>
<a href="#experience"onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ?'active':''} ><VscBook/></a>
<a href="#services"onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ?'active':''} ><VscTools/></a>
<a href="#portfolio"onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ?'active':''} ><AiOutlineFundProjectionScreen/></a>
<a href="#testimonials"onClick={()=> setActiveNav('#Testimonials')} className={activeNav === '#Testimonials' ?'active':''} ><RiServiceLine/></a>
<a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ?'active':''} ><RiContactsLine/></a>
    </nav>
  )
}

export default Nav