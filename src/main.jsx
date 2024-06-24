import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import {Home, Technology,Destination,Crew,ShowPlanet} from './Components'


const router = createBrowserRouter([
  {
    element:<Layout />,
    path: '/',
    children: [
      {
        element:<Home />,
        path: '',
      },
      {
        element: <Destination />,
        path: 'destination/',
        children:[
          {
            element: <ShowPlanet/>,
            path: 'planet/',

          }
        ]
      },
      {
        element:<Crew />,
        path:'crew/',
      },
      {
        element:<Technology />,
        path: 'technology/',
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
