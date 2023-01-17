import { createContext, useState, useEffect } from "react";

export const MyCartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const MyCartProvider = ({children}) => {
    const [cart, setCart] = useState(init)
    console.log(cart)

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }
    const removerItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }
    const isInCart = (id) => {
        return cart.some(item => item.id ===id)
    }
    const emptyCart = () => {
        setCart([])
    }
    const totalCart = () => {
        return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }
    const totalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }
    useEffect(() => { 
        localStorage.setItem('cart', JSON.stringify(cart))
     }, [cart])

  return (
    <MyCartContext.Provider value={{
        cart, agregarAlCarrito, removerItem, isInCart, emptyCart, totalCart, totalCantidad
    }}>

    {children}
    </MyCartContext.Provider>
  )
}
