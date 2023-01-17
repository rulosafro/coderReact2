import React, { useState } from 'react'
import "./ItemCount.sass"

export const ItemCount = ({cantidad, setCantidad, max, onAdd}) => {

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1)
  }

  return (
    <div>
      <button onClick={handleRestar}>-</button> <br />
      <span>{cantidad}</span> <br />
      <button className='bg-green-500 botonRam' onClick={handleSumar}>+</button>

      <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  )
}
