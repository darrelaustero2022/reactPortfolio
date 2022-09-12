import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineSkype} from 'react-icons/ai'

const contact = () => {
  return (
    <section id='contact'>
      <h5>My Contact Info</h5>
      <h2>Get in touch</h2>

      <div className="container contact__option">
        <div className="contact__options">
          <article className="contact__option">                   
            <a href="mailto:darrelwork2022@yahoo.com" target="_blank"><HiOutlineMail className='contact__icon'/></a>
            
          </article>

          <article className="contact__option">
            <a href="skype:live:darrelwork2014?chat" target="_blank"><AiOutlineSkype className='contact__icon'/></a>
           
          </article>
         
        </div>
      </div>
    </section>
  )
}

export default contact