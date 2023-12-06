import {React, useState} from 'react'
import Proveedores from './components/Proveedores';
import Articulos from './components/Articulos';
//import { Link, useLocation, BrowserRouter as Router, Route } from "react-router-dom"

function App() {

  //const localtion = useLocation()

  const [mostrarComponente, setMostrarComponente] = useState(false);

  const mostrarOcultarComponente = () => {
    setMostrarComponente(!mostrarComponente); // Cambia el estado para mostrar u ocultar el componente
  }

  return (
    <div>
          <div>
        <div className='md:flex md:min-h-screen'>
          <aside className='md:w-1/4 bg-blue-600 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white'>coppel</h2>
            <nav className='mt-8'>
              <button className='block hover:text-blue-300 text-white font-bold mt-2' onClick={mostrarOcultarComponente}>Proveedor</button>
              <button className='block hover:text-blue-300 text-white font-bold mt-2' onClick={mostrarOcultarComponente}>Articulos</button>
            </nav>
          </aside>
          <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <div>
              {mostrarComponente && <Proveedores/>} {<Articulos/>}
            </div>
          </div>
        </div>
        
    </div>
    </div>
  )
}

export default App
