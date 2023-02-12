import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id="footer">
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#portfolio">Portifólio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/lucaswmlima/" target="_blank"><BsLinkedin size="2rem" /></a>
        <a href="https://www.github.com/LucaswmLima" target="_blank"><BsGithub size="2rem" /></a>
      </div>

      <div className="footer__madeby">
        <h2>Feito com</h2>
        <AiOutlineHeart size="2rem"/>
        <h2>por Lucas William Martins Lima</h2>
      </div>
      
    </footer>
  )
}

export default Footer