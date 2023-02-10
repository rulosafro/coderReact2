import React, { useContext } from 'react'
import { MyCartContext } from '../context/MyCartContext'
import { FiTrash2 } from "react-icons/fi"
import { Link } from 'react-router-dom'

export const Cart = () => {

    const {cart, emptyCart, totalCart, totalCantidad, removerItem, agregarAlCarrito} = useContext(MyCartContext)

  return (
    <div className='container mx-auto px-4 my-4'>
        <h2 className='text-6xl font-bold '>En tu carrito </h2>
        <hr />
        <div className='lg:flex lg:flex-wrap lg:gap-8 sm:w-auto'>
            {
                cart.map(item => (
                    <div className='my-4 bg-neutral-600 lg:w-[45%] grid-flow-col sm:w-auto' key={item.id}>
                        <img src={item.image} alt="" />
                        <h2 className='text-3xl font-bold p-3'>{item.name} </h2>
                        <p><span className='font-bold p-3'>Categoria:</span> {item.category}</p>
                        <p><span className='font-bold p-3'>Cantidad:</span> {item.cantidad}</p>
                        <p><span className='font-bold p-3'>Precio:</span> ${item.price * item.cantidad}</p>
                        <button className='ramButton bg-red-600 p-2 my-2 m-3' onClick={() => removerItem(item.id) }> <FiTrash2/> </button>

                        {/* <button className='ramButton font-bold bg-blue-600 p-2 my-2 m-3'>-</button> 
                        <span className='text-xl font-bold '>Num</span>
                        <button className='ramButton font-bold bg-blue-600 p-2 my-2 m-3'>+</button>
                        <button className='ramButton'>Agregar</button> */}
                    </div>
                    // onClick={handleRestar} onClick={handleSumar}
                ))
            }
        </div>

        <h4 className='font-bold text-2xl'>Compra Total: {totalCart()}</h4>

        <button className='ramButton my-4 bg-neutral-700 hover:bg-red-600' onClick={emptyCart}>Vaciar carrito</button>
        <Link to="/checkout" className='ramButton bg-primary text-black font-bold hover:bg-yellow-600'>Terminar Compra</Link>
    </div>
  )
}
