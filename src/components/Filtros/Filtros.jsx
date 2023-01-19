import React from 'react'
import { Link } from "react-router-dom";
import './Filtros.sass'

export const Filtros = () => {
  return (
    <div className='filtrosRow flex flew-row '>
      <h4 className='text-lg text-bold'>Filtros</h4>
      <ul>
        <li><Link className="filterLink" to="/"> Sin Filtro</Link></li>
        <li><Link className="filterLink" to="/productos/cat1"> A1</Link></li>
        <li><Link className="filterLink" to="/productos/cat2"> A2</Link></li>
        <li><Link className="filterLink" to="/productos/cat3"> A3</Link></li>
        <li><Link className="filterLink" to="/productos/cat4"> A4</Link></li>
      </ul>
    </div>
  )
}
