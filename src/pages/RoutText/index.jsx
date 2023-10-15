import { useState, useEffect } from 'react'
import Layout from "../../components/Layout";
import colombia from '../../images/colombia.png'
import ecuador from '../../images/ecuador.png'
import peru from '../../images/peru.png'
import bolivia from '../../images/bolivia.png'
import chile from '../../images/chile.png'
import './styles.css'

const data = [
  {
    point: 'Bogotá - Cali',
    distance: '479',
    img: colombia,
    checked: false
  },
  {
    point: 'cali - Pasto',
    distance: '382',
    img: colombia,
    checked: false
  },
  {
    point: 'Pasto - Quito',
    distance: '339',
    img: ecuador,
    checked: false
  },
  {
    point: 'Quito - Naranjal',
    distance: '409',
    img: ecuador,
    checked: false
  },
  {
    point: 'Naranjal - Máncora',
    distance: '277',
    img: ecuador,
    checked: false
  },
  {
    point: 'Máncora - Chiclayo',
    distance: '394',
    img: peru,
    checked: false
  },
  {
    point: 'Chiclayo - Trujillo',
    distance: '211',
    img: peru,
    checked: false
  },
  {
    point: 'Trujillo - Barranca',
    distance: '373',
    img: peru,
    checked: false
  },
  {
    point: 'Barranca - St Vice Cañ',
    distance: '336',
    img: peru,
    checked: false
  },
  {
    point: 'St Vice Cañ - Nazca',
    distance: '298',
    img: peru,
    checked: false
  },
  {
    point: 'Nazca - Camaná',
    distance: '394',
    img: peru,
    checked: false
  },
  {
    point: 'Camaná - Arequipa',
    distance: '174',
    img: peru,
    checked: false
  },
  {
    point: 'Arequipa - Puno',
    distance: '295',
    img: peru,
    checked: false
  },
  {
    point: 'Puno - La Paz',
    distance: '250',
    img: peru,
    checked: false
  },
  {
    point: 'La Paz - Ororu',
    distance: '277',
    img: bolivia,
    checked: false
  },
  {
    point: 'Ororu - Uyuni',
    distance: '314',
    img: bolivia,
    checked: false
  },
  {
    point: 'Uyuni - Maicota - Ollague',
    distance: '255',
    img: bolivia,
    checked: false
  },
  {
    point: 'Ollague - Iquique',
    distance: '304',
    img: chile,
    checked: false
  },
  {
    point: 'Iquique - Tacna',
    distance: '369',
    img: chile,
    checked: false
  },
  {
    point: 'Tacna - Camaná',
    distance: '395',
    img: peru,
    checked: false
  },
  {
    point: 'Camaná - Nazca',
    distance: '394',
    img: peru,
    checked: false
  },
  {
    point: 'Nazca - St Vice Cañ',
    distance: '298',
    img: peru,
    checked: false
  },
  {
    point: 'St Vice Cañ - Barranca',
    distance: '336',
    img: peru,
    checked: false
  },
  {
    point: 'Barranca - Trujillo',
    distance: '373',
    img: peru,
    checked: false
  },
  {
    point: 'Trujillo - Chiclayo',
    distance: '211',
    img: peru,
    checked: false
  },
  {
    point: 'Chiclayo - Máncora',
    distance: '349',
    img: peru,
    checked: false
  },
  {
    point: 'Máncora - Naranjal',
    distance: '277',
    img: peru,
    checked: false
  },
  {
    point: 'Naranjal - Quito',
    distance: '409',
    img: ecuador,
    checked: false
  },
  {
    point: 'Quito - Pasto',
    distance: '339',
    img: ecuador,
    checked: false
  },
  {
    point: 'Pasto - Cali',
    distance: '382',
    img: colombia,
    checked: false
  },
  {
    point: 'Cali - Bogotá',
    distance: '479',
    img: colombia,
    checked: false
  }
]

export default function RoutText() {
  const [state, setState] = useState(data)

  useEffect(() => {
    const dataLocal = localStorage.getItem('ruta2024')
    if (dataLocal) {
      setState(JSON.parse(dataLocal))
    }
  }, [])

  const handleClic = (idx) => {
    const newData = [...data]
    newData[idx].checked = !newData[idx].checked
    setState(newData)
    localStorage.setItem('ruta2024', JSON.stringify(newData))
  }

  return (
    <Layout title='Nuestra ruta 📋'>
      <section className="ruta">
        <div className="head_ruta">
          <div className="point">Origen - destino</div>
          <div className="dist">KM</div>
        </div>
        {state.map((point, idx) => (
          <div
            key={idx}
            className="row_ruta"
            onClick={() => handleClic(idx)}
            style={point.checked ? {backgroundColor: '#2f4d2f'} : {backgroundColor: '#242424'}}
          >
            <div className="point">
              <img src={point.img} alt="ban" />
              {idx+1} -
              {point.point}
            </div>
            <div className="dist">{point.distance}</div>
          </div>
        ))}
      </section>
    </Layout>
  )
}
