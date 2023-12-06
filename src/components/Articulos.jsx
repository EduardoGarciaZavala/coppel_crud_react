import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Articulos() {
  const [articulos, SetArticulos] = useState([])
  const Navigate = useNavigate();
  const obtenerArticulos = async () =>
  {
      try {
      
          const articulos = await axios('http://127.0.0.1:8000/api/articulos')
          SetArticulos(articulos.data.articulos);
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() =>{
    obtenerArticulos();
}, []);

  return (
    <div>
      <h1 className='text-4xl font-bold text-blue-500'>Articulos</h1>

      {articulos.length ? (
        <table className='w-full bg-white mt-5 table-auto'>
          <thead className='bg-blue-600 text-white'>
            <tr>
              <th className='p-2'>Poducto</th>
              <th className='p-2'>Caracteristicas</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>

              {articulos.map(articulo => (
                <tbody key={articulo.id}>
                    <tr className='border-b space-y-2'>
                    <td className='p-5'>
                        <p className='text-2xl text-gray-800'>{articulo.nombre}</p>
                    </td>
            
                    <td>
                        <p className='text-gray- mt-2'><span className='text-gray-800 font-bold uppercase'>Precio</span> {articulo.precio}</p>
                        <p className='text-gray-600'><span className='text-gray-800 font-bold uppercase'>Id Proveedor</span> {articulo.proveedor_id}</p>
                        <p className='text-gray-600 flex flex-col mt-1'><span className='text-gray-800 font-bold uppercase'>Descripcion</span> <span>{articulo.descripcion}</span></p>
                    </td>
            
                    <td className='p-6 flex gap-5 justify-center'>
                        <button
                            className='text-white bg-blue-600 p-2 rounded hover:bg-blue-700 uppercase font-bold text-xs'
                            onClick={() => Navigate(`/articulo/${articulo.id}/editar`)}
                            type='button'
                        >
                            Editar
                        </button>

                        <button
                            className='text-white bg-red-600 p-2 rounded hover:bg-red-800 uppercase font-bold text-xs'
                            type='button'
                            onClick={() => Navigate(`/articulo/${articulo.id}/eliminar`)}
                        >
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
              ) )}

        </table>
      ):
      (
        <p className="text-center mt-10">no Hay clientes aun</p>
      )}
    </div>
  )
}

export default Articulos
