import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/Lideka.JPG'
import IMG2 from '../../Assets/turangacreek.JPG'
import IMG3 from '../../Assets/melitafitness.JPG'
import IMG4 from '../../Assets/Wama.JPG'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Sample Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Lideka"/>
          </div>
          <h3>Lideka Store</h3>
          <div className='portfolio__item-cta'>
            <a href="#contact" className='btn'>Let's Talk</a>
            <a href="https://lidekahome.nl/" className='btn btn-primary' target= '_blank'>Live</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Turanga"/>
          </div>
          <h3>Turanga Creek</h3>
          <div className='portfolio__item-cta'>
            <a href="#contact" className='btn'>Let's Talk</a>
            <a href="https://turangacreek.apps2-dev.cis.nz/" className='btn btn-primary' target= '_blank'>Live</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Melita"/>
          </div>
          <h3>Melita Fitness</h3>
          <div className='portfolio__item-cta'>
            <a href="#contact" className='btn'>Let's Talk</a>
            <a href="https://melitafitnessrehab.com/" className='btn btn-primary' target= '_blank'>Live</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG4} alt="Wama"/>
          </div>
          <h3>WAMA Underwear</h3>
          <div className='portfolio__item-cta'>
            <a href="#contact" className='btn'>Let's Talk</a>
            <a href="https://wamaunderwear.com/" className='btn btn-primary' target= '_blank'>Live</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio