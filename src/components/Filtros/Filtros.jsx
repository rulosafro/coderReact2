import React from 'react'
import { Link } from "react-router-dom";
import './Filtros.sass'

export const Filtros = () => {
  return (
    <div className='filtrosRow flex flew-row mt-2'>

      <h4 className='text-lg text-bold'>Filtros</h4>
      <ul>
        <li><Link className="filterLink" to="/"> All</Link></li>
        <li><Link className="filterLink" to="/productos/Beluga">Beluga</Link></li>
        <li><Link className="filterLink" to="/productos/B.Cooper">B.Cooper</Link></li>
        <li><Link className="filterLink" to="/productos/B.Green">B.Green </Link></li>
        <li><Link className="filterLink" to="/productos/B.Red">B.Red </Link></li>
        <li><Link className="filterLink" to="/productos/B.White">B.White </Link></li>
        <li><Link className="filterLink" to="/productos/C.White">C.White </Link></li>
        <li><Link className="filterLink" to="/productos/Zebra">Zebra </Link></li>
      </ul>
    </div>
  )
}
