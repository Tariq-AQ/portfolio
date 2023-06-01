import React from 'react'
import {FaLinkedin} from 'react-icons/fa' 
import {FaGithub} from 'react-icons/fa' 
import {SiCodewars} from 'react-icons/si' 
import './header.css'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a  href="https://www.linkedin.com/in/tariq-aziz-29213169/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a  href="https://www.codewars.com/users/Tariq-AQ" target='_blank' rel="noreferrer"><SiCodewars/> </a>
        <a  href="https://github.com/Tariq-AQ" target='_blank' rel="noreferrer"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials