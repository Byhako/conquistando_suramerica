import Layout from "../../components/Layout";
import './styles.css'

const data = [
  {
    point: 'Bogotá - Cali',
    distance: '479',
  },
  {
    point: 'cali - Pasto',
    distance: '382'
  },
  {
    point: 'Pasto - Quito',
    distance: '339'
  },
  {
    point: 'Quito - Naranjal',
    distance: '409'
  },
  {
    point: 'Naranjal - Máncora',
    distance: '277'
  },
  {
    point: 'Máncora - Chiclayo',
    distance: '394'
  },
  {
    point: 'Chiclayo - Trujillo',
    distance: '211'
  },
  {
    point: 'Trujillo - Barranca',
    distance: '373'
  },
  {
    point: 'Barranca - St Vicente Cañete',
    distance: '336'
  },
  {
    point: 'St Vicente Cañete - Nazca',
    distance: '298'
  },
  {
    point: 'Nazca - Camaná',
    distance: '394'
  },
  {
    point: 'Camaná - Arequipa',
    distance: '174'
  },
  {
    point: 'Arequipa - Puno',
    distance: '295'
  },
  {
    point: 'Puno - La Paz',
    distance: '250'
  },
  {
    point: 'La Paz - Ororu',
    distance: '277'
  },
  {
    point: 'Ororu - Uyuni',
    distance: '314'
  },
  {
    point: 'Uyuni - Maicota - Ollague',
    distance: '255'
  },
  {
    point: 'Ollague - Iquique',
    distance: '304'
  },
  {
    point: 'Iquique - Tacna',
    distance: '369'
  },
  {
    point: 'Tacna - Camaná',
    distance: '395'
  },
  {
    point: 'Camaná - Nazca',
    distance: '394'
  },
  {
    point: 'Nazca - St Vicente Cañete',
    distance: '298'
  },
  {
    point: 'St Vicente Cañete - Barranca',
    distance: '336'
  },
  {
    point: 'Barranca - Trujillo',
    distance: '373'
  },
  {
    point: 'Trujillo - Chiclayo',
    distance: '211'
  },
  {
    point: 'Chiclayo - Máncora',
    distance: '349'
  },
  {
    point: 'Máncora - Naranjal',
    distance: '277'
  },
  {
    point: 'Naranjal - Quito',
    distance: '409'
  },
  {
    point: 'Quito - Pasto',
    distance: '339'
  },
  {
    point: 'Pasto - Cali',
    distance: '382'
  },
  {
    point: 'Cali - Bogotá',
    distance: '479'
  }
]

export default function RoutText() {
  return (
    <Layout title='Nuestra ruta'>
      <section className="ruta">
        <div className="head_ruta">
          <div className="point">Origen - destino</div>
          <div className="dist">KM</div>
        </div>
        {data.map((point, idx) => (
          <div key={idx} className="row_ruta">
            <div className="point">{idx+1} - {point.point}</div>
            <div className="dist">{point.distance}</div>
          </div>
        ))}
      </section>
    </Layout>
  )
}
