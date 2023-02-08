import { Navigate, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { MyCartContext } from "../context/MyCartContext"

const ItemDetail = ({id, name, stock, category, image, description, price }) => {
  const [cantidad, setCantidad] = useState(1)
  const [opcion, setOpcion] = useState()
  const navigate = useNavigate()

  const { agregarAlCarrito, isInCart } = useContext(MyCartContext)

  const handleVolver = () => {
    navigate(-1)
  }

  const handleAgregar = () => {
    const item = {
      id, name, stock, category, image, description, price, cantidad, opcion
    }

    agregarAlCarrito(item)
  }


  return (
    <div>
      <img src={image} alt={name} />
      <h2 className="">{name}</h2>
      <br />
      <small>{category} - {id}</small>
      <p> {description}</p>
      <br />
      <p>Precio: {price}</p>
      <br />
 
      {
        !isInCart(id)
        ? <ItemCount 
          cantidad={cantidad}
          setCantidad={setCantidad}
          onAdd={handleAgregar}
          max={stock}
          /> 
        : <Link to='/cart'>Terminar mi compra</Link>
      }
      <br />

      <button onClick={handleVolver}>Volver</button>

    </div>
  )
}

export default ItemDetail