import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom";
import Layout from './Layout';
import {Home, Technology,Destination,Crew,ShowPlanet,ShowCrew,ShowTech} from './Components'


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
            index: true,
            element: <Navigate to="moon" replace />,
          },
          {
            element: <ShowPlanet/>,
            path: ':planet/',

          }
        ]
      },
      {
        element:<Crew />,
        path:'crew/',
        children:[{
          path: '',
          element: <ShowCrew/>,
        }]
      },
      {
        element:<Technology />,
        path: 'technology/',
        children:[{
          element: <ShowTech/>,
          path: '',
        }]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
