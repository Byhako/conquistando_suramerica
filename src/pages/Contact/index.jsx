import Layout from "../../components/Layout";
import './styles.css'

export default function Contact() {
  return (
    <Layout title='Contacto ☎️'>
      <div className="contact">
        <h2>Ruben Eduardo Acosta</h2>
        <p>Celular: 3023198919</p>
        <h3>Contactos de emergencia.</h3>
        <p>📞 Madre: 321 387 1724</p>
        <p>📞 Padre: 310 878 1329</p>
        <p>📞 Astrid: 316 886 8287</p>


        <h2 style={{ borderTop: '1px solid white', paddingTop: '10px' }}>Andres Camacho</h2>
        <p>Celular: 317 250 2863</p>
        <h3>Contactos de emergencia.</h3>
        <p>📞 Madre: </p>
        <p>📞 Padre: </p>
      </div>
    </Layout>
  )
}
