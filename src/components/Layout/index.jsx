import { useState } from 'react'
import IconMenu from '../../images/menu'
import IconClose from '../../images/close'
import './styles.css'

export default function Layout({children, title}) {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className='layout'>
      <header>
        <button
          type='button'
          className='button_layout'
          onClick={() => setShowNav(true)}
        >
          <IconMenu />
          <span>Menu</span>
        </button>
        <h1
          className='title_layout'
          onClick={() => setShowNav(false)}
        >{title}</h1>
      </header>
      <nav
        style={showNav ? {left: '0'} : {left: '-80%'}} >
        <div>
          <p>Menu</p>
          <button type='button' className='btnClose' onClick={() => setShowNav(false)}>
            <IconClose />
          </button>
        </div>
        <ul className='lista_nav'>
          <a href="/"><li>Home</li></a>
          <a href="/rout1"><li>Ruta en mapas</li></a>
          <a href="/rout2"><li>Ruta 2</li></a>
          <a href="/rout"><li>Ruta en texto</li></a>
          <a href="/places"><li>Lugares</li></a>
          <a href="/equipment"><li>Equipo</li></a>
          <a href="/contact"><li>Contacto</li></a>
        </ul>
        <footer>
          Create by <a
          href='https://github.com/Byhako'
          rel="noreferrer"
          target='_blank'
          >Byhako</a>
        </footer>
      </nav>
      <section
        onClick={() => setShowNav(false)}
        className='content'
      >{children}</section>
    </div>
  )
}
