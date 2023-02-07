import React, {useState} from 'react'
import './portifolio.css'

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
  title: 'Tic-Tac-Toe em jascript',
  github: 'https://github.com/LucaswmLima/Javascript-Tic-Tac-Toe',
  demo: 'https://lucaswmlima.github.io/Javascript-Tic-Tac-Toe/'
}],
[{
  id: 1,
  image: require('../../assets/clock-unlocker.jpg'),
  title: 'Desbloqueador automático de relógios de ponto desenvolvido com Python',
  github: 'https://github.com/LucaswmLima/python-clock-unlocker',
  demo: ''
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
  title: 'Tic-Tac-Toe em jascript',
  github: 'https://github.com/LucaswmLima/Javascript-Tic-Tac-Toe',
  demo: 'https://lucaswmlima.github.io/Javascript-Tic-Tac-Toe/'
}]]




const Portifolio = () => {

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
    <section id='portifolio'>
      <h5>Meus trabalhos recentes</h5>
      <h2>Portifólio</h2>
      <div className="portifolio__item-cta">
                    <div onClick={PreviousPage} className='btn' target={'_blank'} rel="noreferrer">Página Anterior</div>
                    <div onClick={NextPage} className='btn btn-primary' target={'_blank'} rel="noreferrer">Próxima Página</div>
                  </div>
      <div className="container portifolio__container">
      
        {
          data[index].map(({ id, image, title, github, demo }) => {
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
      <div className="portifolio__item-cta">
                    <div onClick={PreviousPage} className='btn' target={'_blank'} rel="noreferrer">Página Anterior</div>
                    <div onClick={NextPage} className='btn btn-primary' target={'_blank'} rel="noreferrer">Próxima Página</div>
                  </div>
    </section>
  )
}

export default Portifolio