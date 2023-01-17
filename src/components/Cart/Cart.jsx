import React, { useContext } from 'react'
import { MyCartContext } from '../context/MyCartContext'
import { FiTrash2 } from "react-icons/fi"

export const Cart = () => {

    const {cart, emptyCart, totalCart, totalCantidad, removerItem} = useContext(MyCartContext)

  return (
    <div className='container mx-auto px-4'>
        <h2>Tu Compra</h2>
        <hr />
        {
            cart.map(item => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio: ${item.price * item.cantidad}</p>
                    <button onClick={() => removerItem(item.id) }> <FiTrash2/> </button>
                    <hr />
                </div>
            ))
        }

        <h4>{totalCart()}</h4>
        {/* <h4>{totalCantidad}</h4> */}

        <button onClick={emptyCart}>Vaciar carrito</button>
    </div>
  )
}
