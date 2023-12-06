import React from 'react'
import { useRouteError } from 'react-router-dom'

function PaginaError() {

    const error = useRouteError()
  return (
    <div className='space-y-8'>
      <h1 className='text-center text-6xl font-extrabold mt-20 text-blue-900'>Coppeliza</h1>
      <p className='text-center'>hubo un error</p>
    </div>
  )
}

export default PaginaError
