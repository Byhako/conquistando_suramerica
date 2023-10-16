import Layout from '../../components/Layout'
import escudo from '../../images/escudo2.png'
import mapa from '../../images/0.png'
import './styles.css'

export default function Home() {
  return (
    <Layout title='Guía de viaje'>
      <div className='home'>
        <h1>El camino es nuestro destino</h1>
        <img className='escudo' src={escudo} alt="escudo" />
        <img className='mapa' src={mapa} alt="mapa" />
      </div>
    </Layout>
  )
}
