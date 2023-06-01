import React from 'react'
import './services.css'
import {FiCheckCircle} from 'react-icons/fi'

function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
          <h3>UI/UX Design</h3>
          </div>
          <ul className="services__list">
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="services">
          <div className="service__head">
          <h3>Web Development</h3>
          </div>
          <ul className="services__list">
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="services">
          <div className="service__head">
          <h3>3D Works</h3>
          </div>
          <ul className="services__list">
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
            <li>
              <FiCheckCircle className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
              </li>
          </ul>
        </article>
        {/* END OF 3d Works */}
      </div>
    </section>
  )
}

export default Services