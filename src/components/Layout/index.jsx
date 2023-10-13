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
        style={showNav ? {left: '0'} : {left: '-80dvw'}} >
        <div>
          <p>Menu</p>
          <button type='button' className='btnClose' onClick={() => setShowNav(false)}>
            <IconClose />
          </button>
        </div>
        <ul className='lista_nav'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/rout1">Ruta 1</a>
          </li>
          <li>
            <a href="/rout2">Ruta 2</a>
          </li>
          <li>
            <a href="/rout">Ruta en texto</a>
          </li>
          <li>
            <a href="/places">Lugares</a>
          </li>
          <li>
            <a href="/equipment">Equipo</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </nav>
      <section
        onClick={() => setShowNav(false)}
        className='content'
      >{children}</section>
      <footer>
        Create by <a
        href='https://github.com/Byhako'
        rel="noreferrer"
        target='_blank'
      >Byhako</a>
      </footer>
    </div>
  )
}
