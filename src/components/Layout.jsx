import React, { useState } from 'react'
import { Link, Outlet, useLocation } from "react-router-dom"

export default function Layout() {
  const localtion = useLocation()

  const [nuevoProveedor, SetNuevoProveedo] =  useState([]);
  return (
    <div>
        <div className='md:flex md:min-h-screen'>
          <aside className='md:w-1/4 bg-blue-600 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white'>Coppeliza</h2>
            <nav className='mt-8'>
              <Link className={`${localtion.pathname === "/" ? "text-blue-300" : "text-white"} block hover:text-blue-300 text-white font-bold mt-2`} to='/'>proveedores</Link>
              <Link className={`${localtion.pathname === "/nuevo/proveedor" ? "text-blue-300" : "text-white"} block hover:text-blue-300 text-white font-bold mt-2`} to='/nuevo/proveedor'>Nuevo proveedor</Link>
              <Link className={`${localtion.pathname === "/articulos" ? "text-blue-300" : "text-white"} block hover:text-blue-300 text-white font-bold mt-2`} to='/articulos'>articulos</Link>
              <Link className={`${localtion.pathname === "/nuevo/articulo" ? "text-blue-300" : "text-white"} block hover:text-blue-300 text-white font-bold mt-2`} to='/nuevo/articulo'>Nuevo Articulo</Link>
            </nav>
          </aside>
          <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet/>
          </div>
        </div>
        
    </div>
  )
}
