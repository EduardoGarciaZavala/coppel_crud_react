import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Proveedores from './components/Proveedores.jsx'
import Articulos from './components/Articulos.jsx'
import Layout from './components/Layout.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NuevoArticulo from './components/NuevoArticulo.jsx'
import NuevoProveedor from './components/NuevoProveedor.jsx'
import EditarProveedor from './components/EditarProveedor.jsx'
import PaginaError from './components/PaginaError.jsx'
import Eliminar from './components/Eliminar.jsx'
import EditarArticulo from './components/EditarArticulo.jsx'
import EliminarArticulo from './components/EliminarArticulo.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Proveedores/>,
        errorElement:<PaginaError/>
      },      {
        path: '/proveedor/:proveedorId/editar',
        element:<EditarProveedor/>,
        errorElement:<PaginaError/>
      },
      {
        path: '/articulo/:articuloId/editar',
        element:<EditarArticulo/>,
        errorElement:<PaginaError/>
      },
      {
        path: 'nuevo/proveedor',
        element: <NuevoProveedor/>,
        errorElement:<PaginaError/>
      },
      {
        path: '/articulos',
        element: <Articulos/>,
        errorElement:<PaginaError/>
      },
      {
        path: '/nuevo/articulo',
        element: <NuevoArticulo/>,
        errorElement:<PaginaError/>
      },
      {
        path:'/proveedor/:proveedorId/eliminar',
        element: <Eliminar/>,
        errorElement:<PaginaError/>
      },
      {
        path:'/articulo/:articuloId/eliminar',
        element: <EliminarArticulo/>,
        errorElement:<PaginaError/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
