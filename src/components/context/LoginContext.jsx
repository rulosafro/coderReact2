import { useState, createContext, useContext } from 'react'

const MOCK_USERS = [
    {
        email: 'a@a.com',
        password: 'Clavea'
    },
    {
        email: 'b@b.com',
        password: 'Claveb'
    },
    {
        email: 'c@c.com',
        password: 'Clavec'
    }
]

export const LoginContext = createContext()

export const useLoginContext = () => { 
    return useContext(LoginContext)
 }

export const LoginProvider = ({children}) => {
  const [user, setUser] = useState({
    email: "a@a.com",
    logged: true,
    error: null
    // arreglar
  })

  console.log(user);

  const login = (values) => { 
    const match = MOCK_USERS.find(user => user.email === values.email && user.password === values.password)

    if (!match) {
        setUser({
            email: null,
            logged: false,
            error: "Los datos son inválidos"
        })
    }

    if (match.password === values.password) {
        setUser({
            email: match.email,
            logged: true,
            error: null
        })
    } else {
        setUser({
            email: null,
            logged: false,
            error: "Contraseña incorrecta"
        })
    }
   }
    
    const logout = () => { 
        setUser({
            email: null,
            logged: false,
            error: null
        })
    }

  return (
    <LoginContext.Provider value={{user, login, logout}}>
        {children}
    </LoginContext.Provider>
  )
}
