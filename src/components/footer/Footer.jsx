import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const signature = require('../../assets/signature.png')


function Footer({activeNav, setActiveNav}) {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#" onClick={()=>setActiveNav('#')}>Home</a></li>
        <li><a href="#about" onClick={()=>setActiveNav('about')}>About</a></li>
        <li><a href="#experience" onClick={()=>setActiveNav('experience')}>Experience</a></li>
        <li><a href="#services" onClick={()=>setActiveNav('services')}>Services</a></li>
        <li><a href="#portfolio" onClick={()=>setActiveNav('portfolio')}>Portfolio</a></li>
        <li><a href="#contact" onClick={()=>setActiveNav('contact')}>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://instagram.com"><FaFacebookF/></a>
        <a href="https://www.instagram.com/tariq_esa90/"><FiInstagram/></a>
      </div>
      <img src={signature} alt="Tariq" />

      <div className="footer__copyright">
        <small>&copy; Tariq Aziz Portfolio</small>
      </div>
    </footer>
  )
}

export default Footer