import React from 'react'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import "./CartWidget2.sass"

import { MyCartContext } from '../context/MyCartContext'

export const CartWidget2 = () => {
  const {totalCantidad} = useContext(MyCartContext)
  
  return (
    <Link to='/cart' className='cartWidget2'>
      <FiShoppingCart/>
      <span>{totalCantidad()}</span>
    </Link>
  )
}
