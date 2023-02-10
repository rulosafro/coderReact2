import React, { useState } from 'react'

export const Formulario = () => {
  const [values, setValues] = useState({
    nombre: '',
    email: '',
    cel: '',
    mensaje: '',
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
    <div className='container mx-auto my-10 bg-neutral-700 rounded-3xl'>
      <h2 className='text-3xl font-bold bg-primary text-black p-3 rounded-3xl'>Contacto</h2>
      <form onSubmit={handleSubmit} className='flex flex-col w-[80%] justify-center mx-auto mt-5'>

        <input type="text" onChange={handleInputChange} value={values.nombre} name="nombre" placeholder='Nombre' className='my-2 rounded-3xl'/> 
        <input type="email" onChange={handleInputChange} value={values.email} name="email" placeholder='Email' className='my-2 rounded-3xl'/> 
        <input type="tel" onChange={handleInputChange} value={values.cel} name="cel" placeholder='Celular' className='my-2 rounded-3xl'/>  
        <hr className='my-2 rounded-3xl' />
        <input type="text" onChange={handleInputChange} value={values.mensaje} name="mensaje" placeholder='Mensaje' className='my-2 h-40 rounded-3xl'/>  
        <button className='ramButton m-4 font-bold p-1 rounded-lg'> Enviar</button>
      </form>
    </div>
  )
}
