import axios from 'axios';
import React, { useState } from 'react'
import Mensaje from './Mensaje';
import Exito from './Exito';


function NuevoProveedor() {
    const [mensaje, setMensaje] = useState('');
    const [nombre, SetNombre] = useState("");
    const [email, SetEmail] = useState("");
    const [telefono, SetTelefono] = useState("");
    const [direccion, SetDireccion] = useState("");
    const [exito, setExito] = useState('');

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
            const response = await axios.post(`http://127.0.0.1:8000/api/proveedores/`,
            {
                nombre:nombre,
                email:email,
                telefono:telefono,
                direccion:direccion,
            }
            );
            
            console.log('====================================');
            console.log(response);
            console.log('====================================');
            if(response.status === 201)
            {
                setExito("Proveedor Actualizado")
                SetNombre("")
                SetEmail("")
                SetTelefono("")
                SetDireccion("")
            }
        } catch (error) {
            setMensaje("Revisa todos los campos")
            setTimeout(() => {
                setMensaje("")
            }, 3000);

            setTimeout(() => {
                setMensaje("")
            }, 3000);
        }

    }
  return (
    <div>
      <h1 className='text-4xl font-bold text-blue-500'>Nuevo proveedor</h1>

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
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del proveedor"
                    value={email}
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
                    value={telefono}
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
                    value={direccion}
                    onChange={ e => SetDireccion(e.target.value)}
                />
            </div>

            <input
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            type='submit'
            value="Registrar Proveedor"
          />
        </form>
    </div>
  )
}

export default NuevoProveedor
