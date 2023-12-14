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
import map69 from '../../images/6.9.png'
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
import map16 from '../../images/16.png'
import map17 from '../../images/17.png'
import map19 from '../../images/19.png'
import map20 from '../../images/20.png'
import map201 from '../../images/20.1.png'
import map21 from '../../images/21.png'
import map211 from '../../images/21.1.png'
import map22 from '../../images/22.png'
import map23 from '../../images/23.png'
import map24 from '../../images/24.png'
import map25 from '../../images/25.png'
import map26 from '../../images/26.png'
import map27 from '../../images/27.png'
import map28 from '../../images/28.png'
import map29 from '../../images/29.png'
import map30 from '../../images/30.png'

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
      map: map69,
      title: 'Día 7',
      text: 'Ruta corta,  tal vez se pueda continuar el día 6.',
    },
    {
      map: map7,
      title: 'Día 8',
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
      title: 'Día 9',
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
      title: 'Día 10',
      text: 'Al llegar a Lima toca buscar taller para revisión general y cambio de aceite de ambas motos.'
    },
    {
      map: map10,
      title: 'Día 11',
      text: 'Viaje largo por una recte infinita, toca tener paciencia y cantar. 🚨Tener cuidado por Chincha y Asía pues hay clavos en el piso. ¡Llegamos a Nazca!'
    },
    {
      map: map11,
      title: 'Día 12',
      text: 'Otro viaje de rectas infinitas. 🧘'
    },
    {
      map: map12,
      title: 'Día 13',
      text: 'Viaje corto para tener tiempo de conocer Arequipa (Al menos un poquito)'
    },
    {
      map: map13,
      title: 'Día 14',
      text: 'Llegamos a Puno. Debemos averigüar si podemos cruzar en ferri a Bolivia, de no ser posible, tomamos la siguiente ruta.'
    },
    {
      map: map14,
      title: 'Día 15',
      text: 'Llegamos a La Paz. Revisión de motos, deben estar perfectas pues vamos para la nada desde aquí. Cargar galón.'
    },
    {
      map: map16,
      title: 'Día 16',
      text: 'Llegamos a Oruro, aquí decidimos si descanzar o continuar 4 horas mas hasta Uyuni.'
    },
    {
      map: map17,
      title: 'Día 17 - 18',
      text: 'Llegamos al salar 🥳🥳. Descansamos y al siguiente día lo conocemos y buscamos donde acampar para pasar la noche en el salar. (Ojala no llueva 🙏)'
    },
    {
      map: map19,
      title: 'Día 19',
      text: 'El día 18 estamos en el salar, en el día 19 podemos terminar de cruzar el salar hasta Maicota y regresar a Uyuni.'
    },
    {
      map: map20,
      title: 'Día 20',
      subtext: 'Frontera en puente internacional Horacio Guzman, Villazon - Quiaca'
    },
    {
      map: map201,
      text: 'Vamos para Argentina, Carretera Caracol.'
    },
    {
      map: map21,
      title: 'Día 21',
      subtext: 'Vamos para Atacama, Chile!. Paso fronterizo en medio de la nada. 😨'
    },
    {
      map: map211,
      text: 'Vamos para Atacama, Chile!. Desde aquí tenemos dos opciones de viaje. Decidimos segun tiempo.'
    },
    {
      map: map22,
      title: 'Día 22',
      text: 'Lagunas increibles y luego Antofagasta 🙂'
    },
    {
      map: map23,
      title: 'Día 23',
      text: 'Hasta Iquique, pasamos por Tocopilla.'
    },


    {
      map: map24,
      title: 'Día 24',
      text: 'Regresamos a Perú.'
    },
    {
      map: map25,
      title: 'Día 25',
      text: 'Viaje por carretera.'
    },
    {
      map: map26,
      title: 'Día 26',
      text: 'Viaje largo. De nuevo en Nazca 🙂'
    },
    {
      map: map27,
      title: 'Día 27',
      text: 'Viaje no largo para descanzar.'
    },
    {
      map: map28,
      title: 'Día 28',
      text: 'Otro viaje de rectas infinitas. 🧘'
    },
    {
      map: map29,
      title: 'Día 29',
      text: 'En Trujillo buscamos taller para cambio de aceite. No es negociable.'
    },
    {
      map: map30,
      title: 'Día 30',
      text: 'Viaje no largo para conocer.'
    },
    {
      map: map61,
      title: 'Día 31',
      subtext: 'Opción 1. Camino más corto hasta Naranjal. Frontera en Zapotillo. Verificar que el puente no este cerrado.'
    },
    {
      map: map6,
      subtext: '',
      text: 'Opción 2. Camino 71 km más largo hasta Naranjal. Frontera en Huaquillas'
    },
    {
      map: map51,
      title: 'Día 32',
      subtext: 'Continuación opción 1. Frontera en Zapotillo.'
    },
    {
      map: map5,
      text: 'Continuación opción 2. Frontera en Huaquillas.'
    },
    {
      map: map4,
      title: 'Día 33',
      text: '¡Conozcamos Quito!'
    },
    {
      map: map3,
      title: 'Día 34',
      text: 'Paso de la frontera Ecuador Colombia.'
    },
    {
      map: map2,
      title: 'Día 35',
      text: 'Regreso feliz a Cali.'
    }
  ]

  return (
    <Layout title='Ruta 🌎'>
      <Slider data={data} />
    </Layout>
  )
}
