import React from 'react'
import './footer.css'
import {MdComputer} from 'react-icons/md'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>My Portfolio</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/darchton.langly/"><FaFacebookSquare/></a>
        <a href="https://www.linkedin.com/in/darrel-austero-974368242/"><FaLinkedin/></a>
        <a href="https://www.onlinejobs.ph/jobseekers/info/2231490"><MdComputer/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Darrel Austero</small>
      </div>
    </footer>
  )
}

export default Footer