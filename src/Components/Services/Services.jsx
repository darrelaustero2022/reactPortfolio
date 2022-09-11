import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Ux/Ui Design</h3>

          </div>
          /*============================= Ux/Ui Design==================*/
          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
          </ul>
        </article>
        /*=============web development=================*/
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
            
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
          </ul>
        </article>
        /*==================== Social Media =====================*/
        <article className="service">
          <div className="service__head">
            <h3>Social Media</h3>
            
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, laboriosam.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services