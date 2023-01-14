import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá! Sou o</h5>
        <h1>Lucas William</h1>
        <h5 className="text-light">
          Desenvolvedor
        </h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img id="my-img" src={ME} alt="" />
        </div>
        <a href="#footer" className='scroll__down'>Rolar Para Baixo</a>
      </div>
    </header>
  )
}

export default Header