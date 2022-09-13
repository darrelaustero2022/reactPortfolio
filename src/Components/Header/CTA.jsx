import React from 'react'
import CV from '../../Assets/darrelResume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#about" className='btn btn-primary'>Learn more</a>
    </div>
  )
}

export default CTA