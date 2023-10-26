import Layout from "../../components/Layout"
import Slider from "../../components/Slider"

import map31 from '../../images/31.png'
import map32 from '../../images/32.png'
import map33 from '../../images/33.png'
import map34 from '../../images/34.png'
import map35 from '../../images/35.png'
import map36 from '../../images/36.png'
import map37 from '../../images/37.png'
import map38 from '../../images/38.png'

const data = [
  {
    map: map31,
    title: 'Día 19',
    subtext: 'Frontera en puente internacional Horacio Guzman, Villazon - Quiaca'
  },
  {
    map: map32,
    text: 'Vamos para Argentina, Carretera Caracol.'
  },
  {
    map: map33,
    title: 'Día 20 - 21',
    subtext: 'Vamos para Atacama, Chile!. Paso frontirizo en medio de la nada. 😨'
  },
  {
    map: map34,
    text: 'Vamos para Atacama, Chile!. Desde aquí tenemos dos opciones de viaje. Decidimos segun tiempo.'
  },
  {
    map: map35,
    title: 'Día 22',
    subtext: 'Opción 1. Lagunas increibles y luego Tocopilla. Desde aquí seguimos en día 23 en ruta principal.'
  },
  {
    map: map36,
    subtext: 'Hasta Tocopilla es carretera de arena.'
  },
  {
    map: map37,
    text: 'Opción 2. Lagunas increibles y luego Antofagasta 🙂'
  },
  {
    map: map38,
    title: 'Día 23',
    text: 'Hasta Iquique, pasamos por Tocopilla. Desde aquí continuamos en día 24 en ruta principal.'
  },
]

export default function Rout2() {
  return (
    <Layout title='Ruta 🌎'>
      <Slider data={data} />
    </Layout>
  )
}
