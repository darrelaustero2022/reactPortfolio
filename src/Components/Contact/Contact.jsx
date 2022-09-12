import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineSkype} from 'react-icons/ai'
import {SiMessenger} from 'react-icons/si'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>darrelwork2022@yahoo.com</h5>
            <div className="send__message">
              <a href="mailto:darrelwork2022@yahoo.com" target="_blank" className='btn'>Send a message</a>
            </div>
          </article>

          <article className="contact__option">
            <AiOutlineSkype className='contact__option-icon'/>
            <h4>Skype</h4>
            <h5>My Skype</h5>
            <div className="send__message">
              <a href="skype:live:darrelwork2014?chat" target="_blank" className='btn'>Send a message</a>
            </div>
          </article>

          <article className="contact__option">
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>My Facebook</h5>
            <div className="send__message">
              <a href="https://m.me/darchton.langly/" target="_blank" className='btn'>Send a message</a>
            </div>
          </article>
         
        </div>

      
      </div>
    </section>
  )
}

export default contact