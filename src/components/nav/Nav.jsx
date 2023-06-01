/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {RiGalleryLine} from 'react-icons/ri'
// import { useState } from 'react'


function Nav({activeNav, setActiveNav, captionValue, setCaptionValue, captionVisible, setCaptionVisible}) {
//  const[activeNav, setActiveNav] = useState('#')

// const handleClick = (captionText)=>{
// setCaptionValue(captionText)
// setCaptionVisible(true)
// setTimeout(() => {
//   setCaptionValue('')
//   setCaptionVisible(false)
  
// }, 200);
// }
  return (
    <nav>
      <a href="#" onMouseOver={()=>{setCaptionValue('HOME'); setCaptionVisible(true)}} onMouseLeave={()=>{setCaptionValue(''); setCaptionVisible(false)}} onClick={()=>setActiveNav('#')} className={activeNav ==='#'? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about"  onMouseOver={()=>{setCaptionValue('ABOUT'); setCaptionVisible(true)}} onMouseLeave={()=>{setCaptionValue(''); setCaptionVisible(false)}}  onClick={()=>setActiveNav('about')} className={activeNav ==='about'? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onMouseOver={()=>{setCaptionValue('EXPERIENCE'); setCaptionVisible(true)}} onMouseLeave={()=>{setCaptionValue(''); setCaptionVisible(false)}} onClick={()=>setActiveNav('experience')} className={activeNav ==='experience'? 'active' : ''}><BiBook/></a>
      <a href="#services" onMouseOver={()=>{setCaptionValue('SERVICES'); setCaptionVisible(true)}} onMouseLeave={()=>{setCaptionValue(''); setCaptionVisible(false)}} onClick={()=>setActiveNav('services')} className={activeNav ==='services'? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onMouseOver={()=>{setCaptionValue('PORTFOLIO'); setCaptionVisible(true)}} onMouseLeave={()=>{setCaptionValue(''); setCaptionVisible(false)}} onClick={()=>setActiveNav('portfolio')} className={activeNav ==='portfolio'? 'active' : ''}><RiGalleryLine/></a>
      <a href="#contact" onMouseOver={()=>{setCaptionValue('CONTACT'); setCaptionVisible(true)}} onMouseLeave={()=>{setCaptionValue(''); setCaptionVisible(false)}} onClick={()=>setActiveNav('contact')} className={activeNav ==='contact'? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}
export default Nav