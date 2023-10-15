import Layout from '../../components/Layout'
import escudo from '../../images/escudo.png'
import mapa from '../../images/0.png'
import './styles.css'

export default function Home() {
  return (
    <Layout title=''>
      <h1>Guía de viaje</h1>
      <img className='escudo' src={escudo} alt="escudo" />
      <img className='mapa' src={mapa} alt="mapa" />
    </Layout>
  )
}
