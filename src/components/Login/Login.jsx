import React, { useState } from 'react'
import './Login.sass'
import { LoginContext, useLoginContext } from '../context/LoginContext'
import { Link } from 'react-router-dom'

export const Login = () => {
  const { login, user, loading, googleLogin } = useLoginContext()

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
        login(values)
    }
    
  return (
    <div className='container mx-auto px-4 '>

        {
          user.logged 
          ? <>
              <h2 className='text-5xl font-bold my-2 bg-yellow-400 pl-2 text-white'>Incio exitoso!</h2>
              <hr className='mb-4' />
              <Link to='/' className='ramButton'> Visitar catálogo </Link>
            </>
          :<>
            <h2 className='text-9xl font-bold my-2 bg-yellow-400 pl-2 text-white'>Login</h2>
            <hr className='mb-4' />
              <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3 w-[40%]'>
              <input className='rounded-lg text-lg' type="email" value={values.email} onChange={handleInputChange} name='email' placeholder='Email'/> 
              <input className='rounded-lg text-lg' type="password" value={values.password} onChange={handleInputChange} name='password' placeholder='Contraseña'/> 
              {user.error && <p className='text-red-500'> {user.error}</p>}
              <button className='text-ramaBlack bg-primary rounded-full p-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Ingresar</button>
              </form>
            <button className='my-4 bg-violet-500 rounded-full p-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300' onClick={googleLogin}>Google Login</button>
            <Link to="/register" className='flex' >Registrarme</Link>
          </>
        }


    </div>
  )
}
