import React, {useState} from 'react'
import './portfolio.css'

const data = [[{
  id: 1,
  image: require('../../assets/pokedex-img.jpg'),
  title: 'Pokedex em Javascript com  consumo de API REST',
  github: 'https://github.com/LucaswmLima/javascript-pokedex',
  demo: 'https://lucaswmlima.github.io/javascript-pokedex/'
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
  image: require('../../assets/lucy.jpg'),
  title: 'Assistente virtual para controle de estoque em Python',
  github: 'https://github.com/LucaswmLima/python-lucy-assistant',
  demo: ''
}],
[{
  id: 1,
  image: require('../../assets/js-site-1.jpg'),
  title: 'Site comercial desenvolvido em Javascript',
  github: 'https://github.com/LucaswmLima/javascript-website-1',
  demo: 'https://site-01-lucas-william.netlify.app'
}, {
  id: 2,
  image: require('../../assets/clock-unlocker.jpg'),
  title: 'Desbloqueador de relógios de ponto em Python',
  github: 'https://github.com/LucaswmLima/python-clock-unlocker',
  demo: ''
}
,
{
  id: 3,
  image: require('../../assets/currency-converter.jpg'),
  title: 'Conversor monetário de IMC desenvolvida em Flutter',
  github: 'https://github.com/LucaswmLima/flutter-currency-converter',
  demo: ''
}, {
  id: 4,
  image: require('../../assets/grade-calculator.jpg'),
  title: 'Calculadora de notas desenvolvida em Java',
  github: 'https://github.com/LucaswmLima/java-grade-calculator',
  demo: ''
}
,
{
  id: 5,
  image: require('../../assets/fuel-calculator.jpg'),
  title: 'Calculatora de custo de combustível em Java',
  github: 'https://github.com/LucaswmLima/java-fuel-calculator',
  demo: ''
},
{
  id: 6,
  image: require('../../assets/portfolio.jpg'),
  title: 'Portfólio desenvolvido em ReactJS',
  github: 'https://github.com/LucaswmLima/react-portfolio',
  demo: ''
}]
]




const Portfolio = () => {

  const [index, setIndex] = useState(0)

const PreviousPage = () => {
  if(index > 0){
  setIndex(index - 1)
  }
  console.log(index);  
}

const NextPage = () => {
  if(index < data.length -1){
    setIndex(index + 1)
    }
  console.log(index); 
}
  
  return (
    <section id='portfolio'>
      <h5>Meus trabalhos recentes</h5>
      <h2>Portfólio</h2>
      <div className="portfolio__item-cta">
                    <div onClick={PreviousPage} className='btn' target={'_blank'} rel="noreferrer">Página Anterior</div>
                    <div onClick={PreviousPage} className='page-number' target={'_blank'} rel="noreferrer">{index+1}</div>
                    <div onClick={NextPage} className='btn btn-primary' target={'_blank'} rel="noreferrer">Próxima Página</div>
                  </div>
      <div className="container portfolio__container">
      
        {
          data[index].map(({ id, image, title, github, demo }) => {
            return demo === '' ?
              (
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target={'_blank'} rel="noreferrer">Github</a>
                    <div className='btn btn-primary btn-disabled'>Abrir Online</div>
                  </div>
                </article>
              ) :
              (
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target={'_blank'}rel="noreferrer">Github</a>
                    <a href={demo} className='btn btn-primary' target={'_blank'}rel="noreferrer">Abrir Online</a>
                  </div>
                </article>
              )
          })
        }


      </div>
      <div className="portfolio__item-cta">
                    <div onClick={PreviousPage} className='btn' target={'_blank'} rel="noreferrer">Página Anterior</div>
                    <div onClick={PreviousPage} className='page-number' target={'_blank'} rel="noreferrer">{index+1}</div>
                    <div onClick={NextPage} className='btn btn-primary' target={'_blank'} rel="noreferrer">Próxima Página</div>
                  </div>
    </section>
  )
}

export default Portfolio