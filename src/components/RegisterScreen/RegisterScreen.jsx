import React, { useState } from 'react'
import './RegisterScreen.sass'
import { LoginContext, useLoginContext } from '../context/LoginContext'
import { Link } from 'react-router-dom'
// import { Button } from "@material-tailwind/react";

export const RegisterScreen = () => {
  const { login, user, loading, register } = useLoginContext()

  const [values, setValues] = useState({
    email: '',
    password: ''
  })  

  const handleInputChange = (e) => { 
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
   }

   const handleSubmit = (e) => { 
        e.preventDefault()

        register(values)
    }

    
  return (
    <div className='container mx-auto px-4 '>
        <h2 className='text-9xl font-bold my-2 bg-yellow-400 pl-2'>Login</h2>
        <hr className='mb-4' />
        <form action="" onSubmit={handleSubmit}>
            <input className='rounded-lg text-lg' type="email" value={values.email} onChange={handleInputChange} name='email' placeholder='Email'/> <br /> <br />
            <input className='rounded-lg text-lg' type="password" value={values.password} onChange={handleInputChange} name='password' placeholder='Contraseña'/> <br /> <br />
            <button className='bg-violet-500 rounded-full p-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Registrarme</button>
            {user.error && <p className='text-red-900'> {user.error}</p>}
        </form>
        <Link to="/login">Ya estoy registrado</Link>
    </div>
  )
}
