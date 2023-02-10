import React from 'react'
import { Navbar } from "../components/Navbar/Navbar.jsx"
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Error404 } from '../components/Error404/Error404'
import { Nosotros } from '../components/Nosotros/Nosotros'
import { Mision } from '../components/Mision/Mision'
import { Portfolio } from '../components/Portfolio/Portfolio'
import { Formulario } from '../components/Formulario/Formulario'
import { Cart } from '../components/Cart/Cart'
import { Login } from '../components/Login/Login'
import { RegisterScreen } from '../components/RegisterScreen/RegisterScreen'
import { useLoginContext } from '../components/context/LoginContext.jsx'
import { Checkout } from '../components/Checkout/Checkout.jsx'
import { Home } from '../components/Home/Home.jsx'

export const AppRouter = () => {

  const {user} = useLoginContext()
  
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/market' element={<ItemListContainer/>}/>
          <Route path='/what' element={<Mision/>}/>
          <Route path='/we' element={<Nosotros/>}/>
          <Route path='/do' element={<Portfolio/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/formulario' element={<Formulario/>}/>
          <Route path='/busqueda/:busqueda' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/error404' element={ <Error404/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/register' element={ <RegisterScreen/>}/>
          <Route path='*' element={ <Navigate to={"/"}/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
