/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {RiGalleryLine} from 'react-icons/ri'
// import { useState } from 'react'


function Nav({activeNav, setActiveNav,  setCaptionValue}) {


// listen for scrolling and update active nav accordingly
  window.addEventListener('scroll', handleScroll);
  function handleScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight ;
      const scrollPosition = window.pageYOffset;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // This section is currently in view
        const sectionId = section.getAttribute('id');
        setActiveNav(sectionId)
        console.log('Current section:', sectionId);
      }
    });
  }

 
  

  return (
    <nav>
      <a href="#" onMouseOver={()=>setCaptionValue('HOME')} onMouseLeave={()=>setCaptionValue('')} onClick={()=>setActiveNav('#')} className={activeNav ==='#'? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about"  onMouseOver={()=>setCaptionValue('ABOUT')} onMouseLeave={()=>setCaptionValue('')}  onClick={()=>setActiveNav('about')} className={activeNav ==='about'? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onMouseOver={()=>setCaptionValue('EXPERIENCE')} onMouseLeave={()=>setCaptionValue('')} onClick={()=>setActiveNav('experience')} className={activeNav ==='experience'? 'active' : ''}><BiBook/></a>
      <a href="#services" onMouseOver={()=>setCaptionValue('SERVICES')} onMouseLeave={()=>setCaptionValue('')} onClick={()=>setActiveNav('services')} className={activeNav ==='services'? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onMouseOver={()=>setCaptionValue('PORTFOLIO')} onMouseLeave={()=>setCaptionValue('')} onClick={()=>setActiveNav('portfolio')} className={activeNav ==='portfolio'? 'active' : ''}><RiGalleryLine/></a>
      <a href="#contact" onMouseOver={()=>setCaptionValue('CONTACT')} onMouseLeave={()=>setCaptionValue('')} onClick={()=>setActiveNav('contact')} className={activeNav ==='contact'? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}
export default Nav