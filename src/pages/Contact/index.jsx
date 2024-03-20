import Layout from "../../components/Layout";
import './styles.css'

export default function Contact() {
  return (
    <Layout title='Contacto ☎️'>
      <div className="contact">
        <h2>Ruben Eduardo Acosta</h2>
        <p>Celular: 3023198919</p>
        <h3>Contactos de emergencia.</h3>
        <a href="tel:+573213871724">📞 Madre: 321 387 1724</a>
        <a href="tel:+573108781329">📞 Padre: 310 878 1329</a>
        <a href="tel:+573168868287">📞 Astrid: 316 886 8287</a>
        <a href="tel:+573152470917">📞 Angie: 315 247 0917</a>
        <a href="tel:+18632040491">📞 Seguro medico: +1 (863) 2040491</a>
      </div>
    </Layout>
  )
}
