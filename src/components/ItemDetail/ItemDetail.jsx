import { Navigate, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Opciones } from "../Opciones/Opciones"
import { MyCartContext } from "../context/MyCartContext"

const opciones = [
  {value:"1", text: "opción 1"},
  {value:"2", text: "opción 2"},
  {value:"3", text: "opción 3"},
  {value:"4", text: "opción 4"}
]

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
        : <Link to='/coderReact/cart'>Terminar mi compra</Link>
      }
      <br />

      <Opciones
        options={opciones}
        set={setOpcion}
        id={id}
        />
      <br/> 
      <br/> 

      <button onClick={handleVolver}>Volver</button>

    </div>
  )
}

export default ItemDetail