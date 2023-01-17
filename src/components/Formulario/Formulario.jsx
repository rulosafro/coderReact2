import React, { useState } from 'react'

export const Formulario = () => {
  const [values, setValues] = useState({
    nombre: '',
    email: '',
    cel: ''
  })

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
      // console.log(values)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submit", values)
  }

  return (
    <div className='container mx-auto px-4'>
      <p>Test text</p>
      <form onSubmit={handleSubmit}>

        <input type="text" onChange={handleInputChange} value={values.nombre} name="nombre" placeholder='Nombre' className=''/> <br/><br/>
        <input type="email" onChange={handleInputChange} value={values.email} name="email" placeholder='Email' className=''/> <br/><br/>
        <input type="tel" onChange={handleInputChange} value={values.cel} name="cel" placeholder='Celular' className=''/> <br/> <br/>
        <button> Enviar</button>
      </form>
    </div>
  )
}
