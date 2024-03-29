import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a  href={CV} download className='btn'>Download CV</a>
        <a id='cta__contact' href="#contact" className='btn btn-primary'> Let's get in touch!</a>
    </div>
  )
}

export default CTA