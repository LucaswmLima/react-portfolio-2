import React from 'react'
import './portifolio.css'

const data = [{
  id: 1,
  image: require('../../assets/pokedex-img.jpg'),
  title: 'Pokedex em Javascript com  consumo de API REST',
  github: 'https://github.com/LucaswmLima/pokedex',
  demo: 'https://lucaswmlima.github.io/pokedex/'
}, {
  id: 2,
  image: require('../../assets/weather.jpg'),
  title: 'Clima e previsão do tempo  com  consumo de API REST',
  github: 'https://github.com/LucaswmLima/javascript-weather-app',
  demo: 'https://lucaswmlima.github.io/javascript-weather-app/'
}
,
{
  id: 3,
  image: require('../../assets/tic-tac-toe-img.jpg'),
  title: 'Jogo da velha desenvolvido em Javascript',
  github: 'https://github.com/LucaswmLima/Javascript-Tic-Tac-Toe',
  demo: 'https://lucaswmlima.github.io/Javascript-Tic-Tac-Toe/'
}, {
  id: 4,
  image: require('../../assets/calculator-img.jpg'),
  title: 'Calculadora em Javascript com validações de entrada',
  github: 'https://github.com/LucaswmLima/javascript-calculator',
  demo: 'https://lucaswmlima.github.io/javascript-calculator/'
}
,
{
  id: 5,
  image: require('../../assets/IMC.jpg'),
  title: 'Calculatora de IMC desenvolvida em Flutter',
  github: 'https://github.com/LucaswmLima/javascript-calculator',
  demo: ''
},
{
  id: 6,
  image: require('../../assets/tic-tac-toe-img.jpg'),
  title: 'Tic-Tac-Toe in javascript',
  github: 'https://github.com/LucaswmLima/Javascript-Tic-Tac-Toe',
  demo: 'https://lucaswmlima.github.io/Javascript-Tic-Tac-Toe/'
}]


const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>Meus trabalhos recentes</h5>
      <h2>Portifólio</h2>
      <div className="container portifolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return demo === '' ?
              (
                <article key={id} className="portifolio__item">
                  <div className="portifolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portifolio__item-cta">
                    <a href={github} className='btn' target={'_blank'} rel="noreferrer">Github</a>
                    <div className='btn btn-primary btn-disabled'>Abrir Online</div>
                  </div>
                </article>
              ) :
              (
                <article key={id} className="portifolio__item">
                  <div className="portifolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portifolio__item-cta">
                    <a href={github} className='btn' target={'_blank'}rel="noreferrer">Github</a>
                    <a href={demo} className='btn btn-primary' target={'_blank'}rel="noreferrer">Abrir Online</a>
                  </div>
                </article>
              )
          })
        }


      </div>
    </section>
  )
}

export default Portifolio