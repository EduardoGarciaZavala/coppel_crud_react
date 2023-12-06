import axios from 'axios';
import React, { useState } from 'react'
import Mensaje from './Mensaje';
import Exito from './Exito';

function NuevoArticulo() {

  const [nombre, SetNombre] = useState("")
  const [descripcion, SetDescripcion] = useState("")
  const [precio, SetPrecio] = useState(0)
  const [idProveedor, SetIdProveedor] = useState(0)
  const [exito, setExito] = useState('');
  const [mensaje, setMensaje] = useState('');


  const handleSubmit = async (e) => {
        
    e.preventDefault();

    if([ nombre, precio, descripcion, idProveedor ].includes('')) {
        setMensaje('Todos los campos son obligatorios')

        setTimeout(() => {
            setMensaje('')
        }, 3000)

        return
    }

    try {
        const response = await axios.post("http://127.0.0.1:8000/api/articulos/",{
          nombre:nombre,
          descripcion:descripcion,
          precio:precio,
          proveedor_id:idProveedor,
        }
        );
        
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        if(response.status === 201)
        {
            setExito("Proveedor Actualizado")
            setTimeout(() => {
              setExito("")
          }, 3000);
            SetNombre("")
            SetPrecio("")
            SetIdProveedor("")
            SetDescripcion("")
        }
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
        setMensaje("Revisa todos los campos")
        setTimeout(() => {
            setMensaje("")
        }, 3000);


    }

}
  return (
    <div>
      <h1 className='text-4xl font-bold text-blue-500'>Nuevo Articulo</h1>
      <form onSubmit={handleSubmit} className='bg-white shadow rounded-md md:wd-3/4 mx-auto px-5 py-10 mt-5' action="post">
        {mensaje && <Mensaje>{mensaje}</Mensaje>}
        {exito && <Exito>{exito}</Exito>}
        <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del proveedor"
                    value={nombre}
                    onChange={ e => SetNombre(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="precio"
                >Precio:</label>
                <input 
                    id="precio"
                    type="numeric"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Precio del Articulo"
                    value={precio}
                    onChange={ e => SetPrecio(Number(e.target.value))}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="idpreveedor"
                >Id Proveedor:</label>
                <input 
                    id="nombre"
                    type="numeric"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Id Proveedor"
                    value={idProveedor}
                    onChange={ e => SetIdProveedor(Number(e.target.value))}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="direccion"
                >Descripcion:</label>
                <textarea
                    as="textarea"
                    id="descripcion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Descripcion del articulo"
                    value={descripcion}
                    onChange={ e => SetDescripcion(e.target.value)}
                />
            </div>

            <input
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            type='submit'
            value="Registrar Articulo"
          />
        </form>
    </div>
  )
}

export default NuevoArticulo
