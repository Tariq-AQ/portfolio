import React from 'react'
import './header.css'
import CTA from './CTA'
import ThreeD from '../3d/ThreeD'
import HeaderSocials from './HeaderSocials'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'


function Header() {
  return (
<header>
<div className="container header__container">
  <h5>Hello, I'm</h5>
  <div className="name__container">
    <p>T</p>
    <p>a</p>
    <p>r</p>
    <p>i</p>
    <p>q</p>
    <p>&nbsp;</p>
    <p>A</p>
    <p>z</p>
    <p>i</p>
    <p>z</p>
  </div>
  <h5 className="text-light">Fullstack Developer</h5>
  <CTA/>
<HeaderSocials/>
<ThreeD/>

    <a href="#about" className='scroll__down'>Scroll Down <MdOutlineKeyboardDoubleArrowRight/> </a>

</div>
</header>
    )
}

export default Header