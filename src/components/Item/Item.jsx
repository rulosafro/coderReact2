import React from 'react'
import { Link } from "react-router-dom"

export const Item = ({ name, image, description, price, category, id}) => {
  return (
    <div>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>{description}</p>
        <p>{price}</p>
        <small>{category}</small>
        <Link to={`/detail/${id}`}>Ver más</Link>
    </div>
  )
}
