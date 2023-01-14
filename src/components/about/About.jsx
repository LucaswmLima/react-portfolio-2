import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FiUsers } from "react-icons/fi";
import { BiBook } from "react-icons/bi";

const About = () => {
  return (
    <section id='about'>
      <h5>Conheçer</h5>
      <h2>Sobre Mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiBook className='about__icon' />
              <h5>Graduado</h5>
              <small>Técnico em mecatrônica</small><br />
              <small>Duração: 2 anos</small>
            </article>
            <article className='about__card'>
              <BiBook className='about__icon' />
              <h5>Graduado</h5>
              <small>Engenharia da computação</small><br />
              <small>Duração: 5 anos</small>
            </article>


          </div>
          <p>Olá! Meu nome é Lucas William e sou um apaixonado por tecnologia que decidiu seguir o caminho da programação. Tenho uma breve experiência em desenvolvimento web e atualmente estou focando em ampliar minha experiência no mercado de desenvolvimento e aprimorar minhas habilidades em projetos reais.
          <br/><br/>
          Hoje já entendo de tecnologias como Javascript, ReactJS, SQL, Flutter etc.
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About