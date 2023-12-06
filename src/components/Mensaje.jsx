import React from 'react'

const Mensaje = ({children}) => {
    return (
        <div className="bg-red-500 uppercase text-white font-bold text-center p-2 mb-5">{children}</div>
    )
}

export default Mensaje
