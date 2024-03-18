import LogoBlanco from '../images/logo-colmo-cervezas.png'
import CervezaInicio from '../images/beer-home.png'
import '../styles/_home.scss'

function Home() {
  return (

    <main className='container-home'>

      <div className='home-menu'>
         <div className="logo-menu">
              <img src={LogoBlanco}  />
          </div>

          <div className="list-menu">
              <ul>
                  <li>Inicio</li>
                  <li>Quiénes somos</li>
                  <li>Productos</li>
                  <li>Galería</li>
                  <li>Contacto</li>
              </ul>
          </div>
      </div>

      <div className='container-info'>

        <div className='info-beers'>

          <h1>LAS ARTESANAS DE CENTENO MAS  PURAS</h1>
          <p>Cervezas Colmo, las primeras   cervezas elaboradas con centeno de los  Ancares.</p>
          <p>Un proyecto circular y social que  va más allá de una cerveza.</p>

          <button type='button' className='info-btn'>Más Información</button>

        </div>

        <div className='info-img'>
          <img src={CervezaInicio} />
        </div>

      </div>
    </main>

  )
}

export default Home