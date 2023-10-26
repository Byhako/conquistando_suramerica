import Layout from "../../components/Layout";
import './styles.css'

export default function Equipment() {
  return (
    <Layout title='Equipo 🔧'>
      <h2 className="title_equi">Obligatorio</h2>
      <ul>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Chaqueta de proteccion, guantes, botas y rodilleras.</label>
        </li>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Carpa y cobija.</label>
        </li>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Recipiente para cargar agua.</label>
        </li>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Conector USB en la moto.</label>
        </li>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Guayas de repuesto. Acelerador, freno y clutch.</label>
        </li>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Neumaticos de repuesto. 1 llanta delantera y 1 trasera.</label>
        </li>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Herramienta basica de la moto. Llaves para desmontar las ruedas.</label>
        </li>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">2 galonesp para combustible de 5 litros.</label>
        </li>
      </ul>
      
      <h2 className="title_equi">Opcional</h2>
      <ul>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Aceite para lubricar cadena.</label>
        </li>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Inflador.</label>
        </li>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Exploradoras moto.</label>
        </li>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Botiquín básico.</label>
        </li>
        <li>
          <input type="checkbox" id="scales" name="scales" checked />
          <label for="scales">Bateria cargador portatil.</label>
        </li>
      </ul>
    </Layout>
  )
}
