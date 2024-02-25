import { useState, useEffect } from 'react'
import Layout from "../../components/Layout";
import colombia from '../../images/colombia.png'
import ecuador from '../../images/ecuador.png'
import peru from '../../images/peru.png'
import bolivia from '../../images/bolivia.png'
import argentina from '../../images/argentina.png'
import chile from '../../images/chile.png'
import './styles.css'

const data = [
  {
    id: 1,
    point: 'Bogotá - Cali',
    distance: '466',
    img: colombia,
    checked: false
  },
  {
    id: 2,
    point: 'cali - Pasto',
    distance: '382',
    img: colombia,
    checked: false
  },
  {
    id: 3,
    point: 'Pasto - Quito',
    distance: '331',
    img: ecuador,
    checked: false
  },
  {
    id: 4,
    point: 'Quito - Cuenca',
    distance: '461',
    img: ecuador,
    checked: false
  },
  {
    id: 5,
    point: 'Cuenca - Máncora',
    distance: '347',
    img: ecuador,
    checked: false
  },
  {
    id: 5,
    point: 'Cuenca - Sullana',
    distance: '425',
    img: ecuador,
    checked: false
  },
  {
    id: 6,
    point: 'Máncora - Chiclayo',
    distance: '393',
    img: peru,
    checked: false
  },
  {
    id: 6,
    point: 'Sullana - Chiclayo',
    distance: '247',
    img: peru,
    checked: false
  },
  {
    id: 7,
    point: 'Chiclayo - Trujillo',
    distance: '211',
    img: peru,
    checked: false
  },
  {
    id: 8,
    point: 'Trujillo - Cañon Pato',
    distance: '294',
    img: peru,
    checked: false
  },
  {
    id: 9,
    point: 'Cañon - Conococha',
    distance: '252',
    img: peru,
    checked: false
  },
  {
    id: 10,
    point: 'Conococha - Lima',
    distance: '322',
    img: peru,
    checked: false
  },
  {
    id: 11,
    point: 'Lima - Nasca',
    distance: '447',
    img: peru,
    checked: false
  },
  {
    id: 12,
    point: 'Nasca - Camaná',
    distance: '393',
    img: peru,
    checked: false
  },
  {
    id: 13,
    point: 'Nasca - Arequipa',
    distance: '177',
    img: peru,
    checked: false
  },
  {
    id: 14,
    point: 'Arequipa - Puno',
    distance: '299',
    img: peru,
    checked: false
  },
  {
    id: 15,
    point: 'Puno - La Paz',
    distance: '265',
    img: bolivia,
    checked: false
  },
  {
    id: 16,
    point: 'La Paz - Ororu',
    distance: '226',
    img: bolivia,
    checked: false
  },
  {
    id: 17,
    point: 'Ororu - Uyuni',
    distance: '314',
    img: bolivia,
    checked: false
  },
  {
    id: 19,
    point: 'Uyuni - Capla',
    distance: '463',
    img: argentina,
    checked: false
  },
  {
    id: 20,
    point: 'Capla - Atacama',
    distance: '473',
    img: argentina,
    checked: false
  },
  {
    id: 22,
    point: 'Atacama - Antofagasta',
    distance: '365',
    img: chile,
    checked: false
  },
  {
    id: 23,
    point: 'Antofagasta - Iquique',
    distance: '417',
    img: chile,
    checked: false
  },
  {
    id: 24,
    point: 'Iquique - Tacna',
    distance: '366',
    img: chile,
    checked: false
  },
  {
    id: 25,
    point: 'Tacna - Camaná',
    distance: '398',
    img: peru,
    checked: false
  },
  {
    id: 26,
    point: 'Camaná - Nasca',
    distance: '393',
    img: peru,
    checked: false
  },
  {
    id: 27,
    point: 'Nasca - St Vice Cañ',
    distance: '304',
    img: peru,
    checked: false
  },
  {
    id: 28,
    point: 'St Vice Cañ - Barranca',
    distance: '343',
    img: peru,
    checked: false
  },
  {
    id: 29,
    point: 'Barranca - Trujillo',
    distance: '372',
    img: peru,
    checked: false
  },
  {
    id: 30,
    point: 'Trujillo - Chiclayo',
    distance: '211',
    img: peru,
    checked: false
  },
  {
    id: 31,
    point: 'Chiclayo - Sullana',
    distance: '247',
    img: peru,
    checked: false
  },
  {
    id: 31,
    point: 'Chiclayo - Máncora',
    distance: '393',
    img: peru,
    checked: false
  },
  {
    id: 32,
    point: 'Sullana - Naranjal',
    distance: '357',
    img: peru,
    checked: false
  },
  {
    id: 32,
    point: 'Máncora - Naranjal',
    distance: '279',
    img: peru,
    checked: false
  },
  {
    id: 33,
    point: 'Naranjal - Quito',
    distance: '420',
    img: ecuador,
    checked: false
  },
  {
    id: 34,
    point: 'Quito - Pasto',
    distance: '331',
    img: ecuador,
    checked: false
  },
  {
    id: 35,
    point: 'Pasto - Cali',
    distance: '382',
    img: colombia,
    checked: false
  },
  {
    id: 36,
    point: 'Cali - Bogotá',
    distance: '466',
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
              {point.id} -
              {point.point}
            </div>
            <div className="dist">{point.distance}</div>
          </div>
        ))}
      </section>
    </Layout>
  )
}
