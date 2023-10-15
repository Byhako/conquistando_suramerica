import Layout from "../../components/Layout";
import Slider from "../../components/Slider";

import map1 from '../../images/1.png'
import map2 from '../../images/2.png'
import map3 from '../../images/3.png'
import map4 from '../../images/4.png'
import map5 from '../../images/5.png'
import map51 from '../../images/5.1.png'
import map6 from '../../images/6.png'
import map61 from '../../images/6.1.png'
import map7 from '../../images/7.png'
import map71 from '../../images/7.1.png'
import map72 from '../../images/7.2.png'
import map73 from '../../images/7.3.png'
import map74 from '../../images/7.4.png'
import map8 from '../../images/8.png'
import map81 from '../../images/8.1.png'
import map82 from '../../images/8.2.png'
import map9 from '../../images/9.png'
import map10 from '../../images/10.png'
import map11 from '../../images/11.png'
import map12 from '../../images/12.png'
import map13 from '../../images/13.png'
import map14 from '../../images/14.png'
import map15 from '../../images/15.png'
import map16 from '../../images/16.png'
import map17 from '../../images/17.png'
import map18 from '../../images/18.png'
import map19 from '../../images/19.png'
import map20 from '../../images/20.png'
import map21 from '../../images/21.png'
import map22 from '../../images/22.png'
import map23 from '../../images/23.png'
import map24 from '../../images/24.png'
import map25 from '../../images/25.png'

export default function Rout1() {
  const data = [
    {
      map: map1,
      title: 'Día 1',
      text: 'Viaje inicial a Cali'
    },
    {
      map: map2,
      title: 'Día 2',
      text: 'Viaje hacia Pasto'
    },
    {
      map: map3,
      title: 'Día 3',
      subtext: 'Inicio de la aventura',
      text: 'Paso de la frontera Colombia Ecuador.'
    },
    {
      map: map4,
      title: 'Día 4',
      text: 'Desde aquí tenemos dos opciones para cruzar la frontera. Debemos preguntar cual es mejor y decidir. (Huaquillas ó Zapotillo)'
    },
    {
      map: map5,
      title: 'Día 5',
      subtext: 'Opción 1. Frontera en Huaquillas. Camino 71 km más largo hasta Chiclayo, pero en Máncora hay mar lindo.'
    },
    {
      map: map51,
      text: 'Opción 2. Frontera en Zapotillo. Camino más corto hasta Chiclayo, pasamos por el puente internacional. Toca verificar que no este cerrado.'
    },
    {
      map: map6,
      title: 'Día 6',
      subtext: 'Continuación opción 1. Camino 71 km más largo hasta Chiclayo.'
    },
    {
      map: map61,
      subtext: '',
      text: 'Continuación opción 2. Camino más corto hasta Chiclayo.'
    },
    {
      map: map7,
      title: 'Día 7',
      subtext: 'Ya que tiene mucho detalle, haremos zoom por sectores.',
    },
    {
      map: map71,
      subtext: 'Hasta Santa Ana vamos por la Panamericana, allí PITS. Comenzamos Off normal.',
    },
    {
      map: map72,
      subtext: 'Off algo más técnico y paramos en el puente Huarochiri para decidir.',
    },
    {
      map: map73,
      subtext: 'Podemos seguir derecho, o girar por el puente. La ruta se hace más larga y es de off muy tecnico. Paisajes hermosos pero decidimos según clima, estado de las motos y ánimo.',
    },
    {
      map: map74,
      text: 'Último tramo para descanzar mucho y comer, el siguiente día será duro.'
    },
    {
      map: map8,
      title: 'Día 8',
      subtext: 'Iniciamos el día cruzando el cañon del Pato, la ruta más "peligrosa" del Perú, llegamos a Caraz y desviamos para conocer la laguna Paron. (Comer bien y llevar agua y comida)'
    },
    {
      map: map81,
      subtext: 'Desde la laguna Paron podemos caminar hasta la laguna Congelada. Decidimos que hacer segun animos. Luego regrezamos a Caraz.'
    },
    {
      map: map82,
      text: 'Desde Caraz si hay fuerzas avanzamos un poco mas hasta Conococha.'
    },
    {
      map: map9,
      title: 'Día 9',
      text: 'Al llegar a Lima toca buscar taller para revisión general y cambio de aceite de ambas motos.'
    },
    {
      map: map10,
      title: 'Día 10',
      text: 'Viaje largo por una recte infinita, toca tener paciencia y cantar. ¡Llegamos a Nazca!'
    },
    {
      map: map11,
      title: 'Día 11',
      text: 'Otro viaje de rectas infinitas. 🧘'
    },
    {
      map: map12,
      title: 'Día 12',
      text: 'Viaje corto para tener tiempo de conocer Arequipa (Al menos un poquito)'
    },
    {
      map: map13,
      title: 'Día 13',
      text: 'Llegamos a Puno. Debemos averigüar si podemos cruzar en ferri a Bolivia, de no ser posible, tomamos la siguiente ruta.'
    },
    {
      map: map14,
      title: 'Día 14',
      text: 'Llegamos a La Paz. Revisión de motos, deben estar perfectas pues vamos para la nada desde aquí. Cargar galón.'
    },
    {
      map: map15,
      title: 'Día 15',
      text: 'Llegamos a Oruro, aquí decidimos si descanzar o continuar 4 horas mas hasta Uyuni.'
    },
    {
      map: map16,
      title: 'Día 16',
      text: 'Llegamos al salar 🥳🥳. Descansamos y al siguiente día lo conocemos y buscamos donde acampar para pasar la noche en el salar. (Ojala no llueva 🙏)'
    },
    {
      map: map17,
      title: 'Día 18',
      text: 'El 17 estamos en el salar, en el día 18 podemos terminar de cruzar el salar hasta Maicota o regresar a Uyuni y tomar toda la ruta hasta Ollague. ¡Llegamos a Chile!'
    },
    {
      map: map18,
      title: 'Día 19',
      text: 'Ruta off de arena en medio de la nada.'
    },
    {
      map: map19,
      title: 'Día 20',
      text: 'Regresamos a Perú.'
    },
    {
      map: map20,
      title: 'Día 21',
      text: 'Viaje por carretera.'
    },
    {
      map: map21,
      title: 'Día 22',
      text: 'Viaje largo. De nuevo en Nazca 🙂'
    },
    {
      map: map22,
      title: 'Día 23',
      text: 'Viaje no largo para descanzar.'
    },
    {
      map: map23,
      title: 'Día 24',
      text: 'Otro viaje de rectas infinitas. 🧘'
    },
    {
      map: map24,
      title: 'Día 25',
      text: 'En Trujillo buscamos taller para cambio de aceite. No es negociable.'
    },
    {
      map: map25,
      title: 'Día 26',
      text: 'Viaje no largo para conocer.'
    },
    {
      map: map61,
      title: 'Día 27',
      subtext: 'Opción 1. Camino más corto hasta Naranjal. Frontera en Zapotillo. Verificar que el puente no este cerrado.'
    },
    {
      map: map6,
      subtext: '',
      text: 'Opción 2. Camino 71 km más largo hasta Naranjal. Frontera en Huaquillas'
    },
    {
      map: map51,
      title: 'Día 28',
      subtext: 'Continuación opción 1. Frontera en Zapotillo.'
    },
    {
      map: map5,
      text: 'Continuación opción 2. Frontera en Huaquillas.'
    },
    {
      map: map4,
      title: 'Día 29',
      text: '¡Conozcamos Quito!'
    },
    {
      map: map3,
      title: 'Día 30',
      text: 'Paso de la frontera Ecuador Colombia.'
    },
    {
      map: map2,
      title: 'Día 31',
      text: 'Regreso feliz a Cali.'
    }
  ]

  return (
    <Layout title='Ruta 🌎'>
      <Slider data={data} />
    </Layout>
  )
}
