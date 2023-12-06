import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Mensaje from './Mensaje';
import Exito from './Exito';

function EditarArticulo() {
    const { articuloId } = useParams();
    const [articulo, SetArticulo] = useState({});
    const [mensaje, setMensaje] = useState('');
    const [exito, setExito] = useState('');
    const [nombre, SetNombre] = useState("")
    const [descripcion, SetDescripcion] = useState("")
    const [precio, SetPrecio] = useState(0)
    const [proveedor_id, SetProveedor_id] = useState("");
    useEffect(() => {
        SetNombre(articulo.nombre)
        SetPrecio(articulo.precio)
        SetProveedor_id(articulo.proveedor_id)
        SetDescripcion(articulo.descripcion)
    },[articulo])

    useEffect(() => {
        const  obtenerArticulo = async () =>
        {
            try {
                const response  = await axios.get(`http://127.0.0.1:8000/api/articulos/${articuloId}/`)
                SetArticulo(response.data.articulo)
            } catch (error) {
 
                console.log(error);
            }
        }

        if (articuloId)
        {
            obtenerArticulo();
        }
    }, [articuloId])

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        if([ nombre, precio, proveedor_id, descripcion ].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000)

            return
        }

        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/articulos/${articuloId}`,
            {
                nombre:nombre,
                precio:precio,
                proveedor_id:proveedor_id,
                descripcion:descripcion,
            }
            );
            
            if(response.status === 200)
            {
                setExito("Articulo Actualizado")
                setTimeout(() => {
                    setExito('')
                }, 3000)
            }
        } catch (error) {
            setMensaje("Revisa todos los campos")
            setTimeout(() => {
                setMensaje('')
            }, 3000)
        }

    }


  return (
    <div>
      <h1 className='text-4xl font-bold text-blue-500'>Editar Articulo</h1>

        <form onSubmit={handleSubmit} className='bg-white shadow rounded-md md:wd-3/4 mx-auto px-5 py-10 mt-5'>
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
                    defaultValue={articulo.nombre}
                    onChange={ e => SetNombre(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >Precio:</label>
                <input 
                    id="precio"
                    type="numeric"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="precio del articulo"
                    defaultValue={articulo.precio}
                    onChange={ e => SetPrecio(Number(e.target.value) )}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="idproveedor"
                >Id Proveedor:</label>
                <input 
                    id="idproveedor"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Id del articulo"
                    defaultValue={articulo.proveedor_id}
                    onChange={ e => SetProveedor_id(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="descripcion"
                >Descripcion:</label>
                <textarea
                    as="textarea"
                    id="descripcion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Descripcion del Articulo"
                    defaultValue={articulo.descripcion}
                    onChange={ e => SetDescripcion(e.target.value)}
                />
            </div>

            <input
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            type='submit'
            value="Actualizar Articulo"
          />
        </form>
    </div>
  )
}

export default EditarArticulo
