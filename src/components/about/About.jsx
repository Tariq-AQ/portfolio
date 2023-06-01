import React from 'react'
import './about.css'
// import Me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
       

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ years academic experience</small>
            </article>
            

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>50+ projects</small>
            </article>
          </div>
          <p> As an IT graduate, I have accumulated years of academic experience 
            in both Front-end and Back-end web development. I possess a natural 
            aptitude for rapid and enthusiastic learning. I am meticulous in following
             instructions and capable of executing tasks with precision and accuracy
              even with minimal supervision.</p>
          <a href="#contact" className='btn btn-primary'>Get in touch!</a>
        </div>
      </div>

    </section>
  )
}

export default About