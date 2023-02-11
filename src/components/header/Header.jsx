import React from 'react'
import CTA from './CTA'
import './header.css'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="container ">
        <h4>Olá! Meu nome é</h4>
        <h1>Lucas William</h1>
        <h3 className="text-light">        
        Desenvolvedor formado em engenharia da computação e apaixonado por tudo relacionado a tecnologia. Atualmente estou a procura de uma oportunidade na area.
        </h3>
        <h4>
        Conheça abaixo mais sobre mim e meus trabalhos!
        </h4>
        </div>
        <CTA/>
      </div>
    </header>
  )
}

export default Header