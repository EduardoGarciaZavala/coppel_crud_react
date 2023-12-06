import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { redirect, useParams } from 'react-router-dom';
import Mensaje from './Mensaje';
import Exito from './Exito';

function EditarProveedor() {

    const [proveedor, SetProveedor] = useState({});
    const { proveedorId } = useParams();
    const [mensaje, setMensaje] = useState('');
    const [exito, setExito] = useState('');
    const [nombre, SetNombre] = useState("");
    const [email, SetEmail] = useState("");
    const [telefono, SetTelefono] = useState("");
    const [direccion, SetDireccion] = useState("");

    useEffect(() => {
        SetNombre(proveedor.nombre)
        SetEmail(proveedor.email)
        SetTelefono(proveedor.telefono)
        SetDireccion(proveedor.direccion)
    },[proveedor])

    useEffect(() => {
        const  obtenerProveedor = async () =>
        {
            try {
                const response  = await axios.get(`http://127.0.0.1:8000/api/proveedores/${proveedorId}/`)
                SetProveedor(response.data.proveedor)
            } catch (error) {
 
                console.log(error);
            }
        }

        if (proveedorId)
        {
            obtenerProveedor();
        }
    }, [proveedorId])


    const handleSubmit = async (e) => {
        
        e.preventDefault();

        if([ nombre, email, telefono, direccion ].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000)

            return
        }

        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/proveedores/${proveedorId}`,
            {
                nombre:nombre,
                email:email,
                telefono:telefono,
                direccion:direccion,
            }
            );
            
            if(response.status === 200)
            {
                setExito("Proveedor Actualizado")
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
      <h1 className='text-4xl font-bold text-blue-500'>Editar proveedor</h1>

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
                    defaultValue={proveedor.nombre}
                    onChange={ e => SetNombre(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del proveedor"
                    defaultValue={proveedor.email}
                    onChange={ e => SetEmail(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del proveedor"
                    defaultValue={proveedor.telefono}
                    onChange={ e => SetTelefono(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="direccion"
                >Direccion:</label>
                <textarea
                    as="textarea"
                    id="direccion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Direccion del proveedor"
                    defaultValue={proveedor.direccion}
                    onChange={ e => SetDireccion(e.target.value)}
                />
            </div>

            <input
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            type='submit'
            value="Actualizar Proveedor"
          />
        </form>
    </div>
  )
}

export default EditarProveedor
