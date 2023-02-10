import React, { useContext, useState } from 'react'
import { MyCartContext } from '../context/MyCartContext'
import "./Checkout.sass"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import {db} from "../../firebase/config"
import { Await, Link, Navigate } from 'react-router-dom'

export const Checkout = () => {
    const {cart, totalCart, emptyCart} = useContext(MyCartContext)
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre:'',
        direccion:'',
        email:'',
    })

    const handleInputChange = (e) => { 
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
     }
    
    const handleSubmit = async (e) => { 
        e.preventDefault()

        //Validación
        if (values.nombre.length < 2) {
            alert('Nombre Inválido')
            return
        }
        if (values.direccion.length < 2) {
            alert('Dirección Inválido')
            return
        }
        if (values.email.length < 2) {
            alert('Email Inválido')
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
        }
        console.log(orden)

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')
        const outOfStock = []

        const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))

        const productos = await getDocs(itemsRef)

        productos.docs.forEach((doc) => { 
            const item = cart.find(item => item.id === doc.id)
            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => { 
                    addDoc(ordersRef, orden)
                        .then((doc) => { 
                            setOrderId(doc.id)
                            emptyCart()
                         })  
                        .catch((error) => { console.log(error) })
                })
        } else {
            alert("Hay items sin stock")
        }
    }

    //! Cambiar el Alert

    if (orderId) {
        return (
            <div className='container w-md mx-auto my-10 flex flex-col gap-3'>
                <h2 className='text-6xl font-bold text-primary'>Tu compra ha sido exitosa</h2>
                <p className='ml-10'><span className='font-bold'> El código de tu orden es:</span> {orderId}</p>

                <Link className='ramButton w-[30%] self-start ml-10' to='/'>Volver a la tienda</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to='/'/>
    }

    return (
    <div className='container mx-auto my-10 bg-neutral-700 rounded-3xl'>
        <h2 className='text-3xl font-bold bg-primary text-black p-3 rounded-3xl'>Terminar mi compra</h2>

        <form action="" onSubmit={handleSubmit} className='flex flex-col w-[80%] justify-center mx-auto mt-5'>	
        <p className='p-2'> Este formulario es para terminar tu compra con los datos para la boleta/factura</p>
            <input 
                className='m-2'
                type="text"
                onChange={handleInputChange} 
                name='nombre'
                value={values.nombre}
                placeholder='Nombre'
            />
            <input 
                className='m-2'
                type="text"
                onChange={handleInputChange} 
                name='direccion'
                value={values.direccion}
                placeholder='Dirección'
            />
            <input 
                className='m-2'
                type="email"
                onChange={handleInputChange} 
                name='email'
                value={values.email}
                placeholder='Email'
            />
            <button className='ramButton m-4 font-bold p-1 rounded-lg'>Terminar compra</button>
        </form>
    </div>
  )
}
