import React from 'react'
import "./Opciones.sass"

const Opciones = ({options, set, id}) => {

  const handleChange = (e) => {
    set(e.target.value)
  }  
    
  return (
    <select key={id}>
        {options.map((opt) => <option value={opt.value}> {opt.text} </option>)}
    </select>
  )
}
