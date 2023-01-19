import React, { useState } from 'react'
import './Login.sass'
import { LoginContext, useLoginContext } from '../context/LoginContext'
// import { Button } from "@material-tailwind/react";

export const Login = () => {
  const { login } = useLoginContext()

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
        <h2 className='text 3x1 font-bold mb-2'>Login</h2>
        <hr className='mb-4' />
        <form action="" onSubmit={handleSubmit}>
            <input type="email" value={values.email} onChange={handleInputChange} name='email' placeholder='Email'/> <br /> <br />
            <input type="password" value={values.password} onChange={handleInputChange} name='password' placeholder='Contraseñá'/> <br /> <br />
            <button className='btn btn-blue'>Ingresar</button>
            {/* <Button>Ingresar</Button> */}
        </form>
    </div>
  )
}
