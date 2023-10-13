import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import NoFound from './pages/NoFound'
import Rout1 from './pages/Rout1'
import Rout2 from './pages/Rout2'
import RoutText from './pages/RoutText'
import Places from './pages/Places'
import Equipment from './pages/Equipment'
import Contact from './pages/Contact'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/rout1',
    element: <Rout1 />,
  },
  {
    path: '/rout2',
    element: <Rout2 />,
  },
  {
    path: '/rout',
    element: <RoutText />,
  },
  {
    path: '/places',
    element: <Places />,
  },
  {
    path: '/equipment',
    element: <Equipment />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <NoFound />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
