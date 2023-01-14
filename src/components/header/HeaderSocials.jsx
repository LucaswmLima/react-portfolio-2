import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/lucaswmlima/" target="_blank"><BsLinkedin size="2rem"/></a>
        <a href="https://www.github.com/LucaswmLima" target="_blank"><BsGithub size="2rem"/></a>
    </div>
  )
}

export default HeaderSocials