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
    <div className='flex flex-row gap-4 items-center align-center ml-3'>
      <button className='ramButton font-bold' onClick={handleRestar}>-</button> <br />
      <span className='text-xl font-bold '>{cantidad}</span> <br />
      <button className='ramButton font-bold' onClick={handleSumar}>+</button>

      <button onClick={onAdd} className='font-bold bg-green-500 ramButton'>Agregar al Carrito</button>
    </div>
  )
}
