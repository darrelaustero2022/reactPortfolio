import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {HiUser} from 'react-icons/hi'
import {BiMedal} from 'react-icons/bi'
import {GiGearHammer} from 'react-icons/gi'
import {HiMail} from 'react-icons/hi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><HiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiMedal/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><GiGearHammer/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiMail/></a>
    </nav>
  )
}

export default Nav