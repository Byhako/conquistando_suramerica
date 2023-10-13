import Layout from '../../components/Layout'
import escudo from '../../images/escudo.png'

export default function Home() {
  return (
    <Layout title='Conquistando Suramerica'>
      <img src={escudo} alt="escudo" style={{ scale: '0.5' }}/>
    </Layout>
  )
}
