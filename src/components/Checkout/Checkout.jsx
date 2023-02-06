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
            <div>
                <h2>Tu compra ha sido exitosa</h2>
                <p>El código de tu orden es: {orderId}</p>

                <Link to='/'>Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to='/'/>
    }

    return (
    <div>
        <h2>Terminar mi compra</h2>
        <hr />

        <form action="" onSubmit={handleSubmit} className=' flex-row'>	
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
            <button className='bg-white m-4 text-black p-1 rounded-lg'>Enviar</button>
        </form>
    </div>
  )
}
