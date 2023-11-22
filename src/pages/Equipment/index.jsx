import { useState, useEffect } from 'react'
import Layout from "../../components/Layout";
import './styles.css'

export default function Equipment() {
  const [state, setState] = useState({
    scales1: false,
    scales2: false,
    scales3: false,
    scales4: false,
    scales5: false,
    scales6: false,
    scales7: false,
    scales8: false,
    scales9: false,
    scales10: false,
    scales11: false,
    scales12: false,
    scales13: false,
    scales14: false,
    scales15: false,
    scales16: false,
  })

  const handleClic = (key) => {
    const newState = { ...state }
    newState[key] = !newState[key]
    setState(newState)
    localStorage.setItem('checkEquipo', JSON.stringify(newState))
  }

  useEffect(() => {
    const data = localStorage.getItem('checkEquipo')
    if (data) {
      setState(JSON.parse(data))
    }
  }, [])

  return (
    <Layout title='Equipo 🔧'>
      <div className='equipo'>
        <h2 className="title_equi">Obligatorio</h2>
        <ul>
          <li>
            <input type="checkbox" id="scales1" name="scales1" checked={state.scales1} onClick={() => handleClic('scales1')} />
            <label for="scales1">Chaqueta de protección, guantes, botas y rodilleras o pantalón de protección.</label>
          </li>
          <li>
            <input type="checkbox" id="scales2" name="scales2" checked={state.scales2} onClick={() => handleClic('scales2')} />
            <label for="scales2">Carpa y cobija o sleeping.</label>
          </li>
          <li>
            <input type="checkbox" id="scales3" name="scales3" checked={state.scales3} onClick={() => handleClic('scales3')} />
            <label for="scales3">Recipiente para cargar agua.</label>
          </li>
          <li>
            <input type="checkbox" id="scales4" name="scales4" checked={state.scales4} onClick={() => handleClic('scales4')} />
            <label for="scales4">Conector USB en la moto o batería portatil.</label>
          </li>
          <li>
            <input type="checkbox" id="scales5" name="scales5" checked={state.scales5} onClick={() => handleClic('scales5')} />
            <label for="scales5">Guayas de repuesto. Acelerador, freno y clutch.</label>
          </li>
          <li>
            <input type="checkbox" id="scales6" name="scales6" checked={state.scales6} onClick={() => handleClic('scales6')} />
            <label for="scales6">Neumáticos HEAVY DUTY instalados y de repuesto. 1 llanta delantera y 1 trasera.</label>
          </li>
          <li>
            <input type="checkbox" id="scales7" name="scales7" checked={state.scales7} onClick={() => handleClic('scales7')} />
            <label for="scales7">Herramienta básica de la moto. Llaves para desmontar las ruedas.</label>
          </li>
          <li>
            <input type="checkbox" id="scales15" name="scales15" checked={state.scales15} onClick={() => handleClic('scales15')} />
            <label for="scales15">Llantas en excelente estado.</label>
          </li>
          <li>
            <input type="checkbox" id="scales8" name="scales8" checked={state.scales8} onClick={() => handleClic('scales8')} />
            <label for="scales8">2 galones para combustible de 5 litros.</label>
          </li>
        </ul>
        
        <h2 className="title_equi">Opcional</h2>
        <ul>
          <li>
            <input type="checkbox" id="scales9" name="scales9" checked={state.scales9} onClick={() => handleClic('scales9')} />
            <label for="scales9">Cepillo y aceite para lubricar cadena.</label>
          </li>
          <li>
            <input type="checkbox" id="scales18" name="scales18" checked={state.scales18} onClick={() => handleClic('scales18')} />
            <label for="scales18">Impermeable humano.</label>
          </li>
          <li>
            <input type="checkbox" id="scales10" name="scales10" checked={state.scales10} onClick={() => handleClic('scales10')} />
            <label for="scales10">Inflador.</label>
          </li>
          <li>
            <input type="checkbox" id="scales11" name="scales11" checked={state.scales11} onClick={() => handleClic('scales11')} />
            <label for="scales11">Exploradoras moto.</label>
          </li>
          <li>
            <input type="checkbox" id="scales12" name="scales12" checked={state.scales12} onClick={() => handleClic('scales12')} />
            <label for="scales12">Botiquín básico.</label>
          </li>
          <li>
            <input type="checkbox" id="scales13" name="scales13" checked={state.scales13} onClick={() => handleClic('scales13')} />
            <label for="scales13">Batería cargador portatil.</label>
          </li>
          <li>
            <input type="checkbox" id="scales14" name="scales14" checked={state.scales14} onClick={() => handleClic('scales14')} />
            <label for="scales14">Cuerda.</label>
          </li>
          <li>
            <input type="checkbox" id="scales16" name="scales16" checked={state.scales16} onClick={() => handleClic('scales16')} />
            <label for="scales16">Camel back.</label>
          </li>
          <li>
            <input type="checkbox" id="scales17" name="scales17" checked={state.scales17} onClick={() => handleClic('scales17')} />
            <label for="scales17">Brújula.</label>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
