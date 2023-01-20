import React, { useState } from 'react'
import './Login.sass'
import { LoginContext, useLoginContext } from '../context/LoginContext'
// import { Button } from "@material-tailwind/react";

export const Login = () => {
  const { login, user } = useLoginContext()

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
        console.log(values);

        login(values)
    }

    
  return (
    <div className='container mx-auto px-4 '>
        <h2 className='text-9xl font-bold my-2 bg-yellow-400 pl-2'>Login</h2>
        <hr className='mb-4' />
        <form action="" onSubmit={handleSubmit}>
            <input className='rounded-lg text-lg' type="email" value={values.email} onChange={handleInputChange} name='email' placeholder='Email'/> <br /> <br />
            <input className='rounded-lg text-lg' type="password" value={values.password} onChange={handleInputChange} name='password' placeholder='Contraseñá'/> <br /> <br />
            <button className='bg-violet-500 rounded-full p-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Ingresar</button>
            {user.error && <p className='text-red-900'> {user.error}</p>}
        </form>
    </div>
  )
}
