import React from 'react'
import './about.css'
import ME from '../../Assets/about me.jpg'
import {FaMedal} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Darrel's Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaMedal className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year of Web Development</small>
            </article>
            <article className='about__card'>
              <AiOutlineUsergroupAdd className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Satisfied Clients Worldwide</small>
            </article>
            <article className='about__card'>
              <CgWebsite className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Projects Completed</small>
            </article>
          </div>
          <p>
            I have created wordpress websites from scratch which includes Ux/Ui designing, setting up hosting and domain, and up to website testing and deployment. I build websites using the React JS framework as well. My passion is to help market your products and services, and to provide your website visitors an amazing experience. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>



    </section>

  )
}

export default About