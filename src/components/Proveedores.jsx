import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, Form, useParams } from 'react-router-dom';

function Proveedores() {
    const [proveedores, setProveedores] = useState([]);
    const Navigate = useNavigate();
    const obtenerProveedores = async () =>
    {
        try {
        
            const proveedores = await axios('http://127.0.0.1:8000/api/proveedores')
            setProveedores(proveedores.data.proveedores);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        obtenerProveedores();
    }, []);

  return (
    <div>
      <h1 className='text-4xl font-bold text-blue-500'>Proveedores</h1>

      {proveedores.length ? (
        <table className='w-full bg-white mt-5 table-auto'>
          <thead className='bg-blue-600 text-white'>
            <tr>
              <th className='p-2'>Proveedor</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>

              {proveedores.map(proveedor => (
                <tbody key={proveedor.id}>
                    <tr className='border-b space-y-2'>
                    <td className='p-5'>
                        <p className='text-2xl text-gray-800'>{proveedor.nombre}</p>
                        <p><span className='font-bold uppercase text-gray-800'>ID </span>{proveedor.id}</p>
                    </td>
            
                    <td>
                        <p className='text-gray- mt-2'><span className='text-gray-800 font-bold uppercase'>Email</span> {proveedor.email}</p>
                        <p className='text-gray-600'><span className='text-gray-800 font-bold uppercase'>Cel</span> {proveedor.telefono}</p>
                        <p className='text-gray-600 flex flex-col mt-1'><span className='text-gray-800 font-bold uppercase'>Direccion</span> <span>{proveedor.direccion}</span></p>
                    </td>
            
                    <td className='p-6 flex gap-5 justify-center'>
                        <button
                            className='text-white bg-blue-600 p-2 rounded hover:bg-blue-700 uppercase font-bold text-xs'
                            onClick={() => Navigate(`/proveedor/${proveedor.id}/editar`)}
                            type='button'
                        >
                            Editar
                        </button>

                        <button
                            className='text-white bg-red-600 p-2 rounded hover:bg-red-800 uppercase font-bold text-xs'
                            type='button'
                            onClick={() => Navigate(`/proveedor/${proveedor.id}/eliminar`)}
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
        <p className="text-center mt-10">no Hay Proveedores aun</p>
      )}
    </div>
  )
}

export default Proveedores
