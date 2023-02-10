import React, { useState } from 'react'
import './RegisterScreen.sass'
import { LoginContext, useLoginContext } from '../context/LoginContext'
import { Link, useNavigate } from 'react-router-dom'
// import { Button } from "@material-tailwind/react";

export const RegisterScreen = () => {
  const { login, user, loading, register } = useLoginContext()
  const navigate = useNavigate()

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
        navigate('/')
    }

    
  return (
    <div className='container max-w p-6 rounded-lg shadow place-content-center mx-auto '>
        <h2 className='text-5xl font-bold my-2 bg-yellow-400 pl-2 text-white'>Registrarme</h2>
        <hr className='mb-4' />
        <form action="" onSubmit={handleSubmit} className='mb-8'>
            <input className='rounded-lg text-lg' type="email" value={values.email} onChange={handleInputChange} name='email' placeholder='Email'/> <br /> <br />
            <input className='rounded-lg text-lg' type="password" value={values.password} onChange={handleInputChange} name='password' placeholder='Contraseña'/> <br /> <br />
            <button className='bg-violet-500 rounded-full p-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Registrarme</button>
            {user.error && <p className='text-red-900'> {user.error}</p>}
        </form>
        <Link to="/login" className='my-2 ramButton'>Ya estoy registrado</Link>
    </div>
  )
}
