import axios from 'axios';
import React, { useState } from 'react'
import { useParams  } from 'react-router-dom';
import Exito from './Exito';
import Mensaje from './Mensaje';


function EliminarArticulo() {
    const { articuloId } = useParams();
    const [exito,setExito] = useState("")
    const [mensaje,setMensaje] = useState("")
    

    const handleEliminar  = async () => {
      
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/articulos/${articuloId}`);
        if(response.status === 202)
        {
            setExito("Eliminado con exito")
            setTimeout(() => {
                setExito('')
            }, 3000)
        }
      } catch (error) {
        setMensaje("No se Pudo Eliminar")
        setTimeout(() => {
          setMensaje('')
        }, 3000)
      }
    }

  return (
    <div className='space-y-8 flex justify-center align-middle flex-col'>
      <h1 className='text-center text-6xl font-extrabold mt-20 text-blue-900'>¿Eliminar?</h1>
      <button
        className='text-white bg-red-600 p-5 rounded hover:bg-red-800 uppercase font-bold text-xs'
        type='button'
        onClick={handleEliminar}
    >
        Eliminar
    </button>
    {mensaje && <Mensaje>{mensaje}</Mensaje>}
    {exito && <Exito>{exito}</Exito>}
    </div>
  )
}

export default EliminarArticulo
