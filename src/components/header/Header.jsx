import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'


function Header() {
  return (
<header>
<div className="container header__container">
  <h5>Hello, I'm</h5>
  <h1>Tariq Aziz</h1>
  <h5 className="text-light">Fullstack Developer</h5>
  <CTA/>
<HeaderSocials/>
  <div className="me">
    <img src={ME} alt="" />
  </div>
    
    <a href="#" className='scroll__down'>Scroll Down <MdOutlineKeyboardDoubleArrowRight/> </a>

</div>
</header>
    )
}

export default Header