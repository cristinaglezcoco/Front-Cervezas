import Logo from '../images/log-cervezas-negro.png'

function Header() {
  return (


    <header className="container-header">
        <div className="logo-header">
            <img src={Logo}  />
        </div>

        <div className="list-header">
            <ul>
                <li>Inicio</li>
                <li>Quiénes somos</li>
                <li>Productos</li>
                <li>Galería</li>
                <li>Contacto</li>
            </ul>
        </div>
    </header>

  )
}

export default Header