import { Navigate, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { MyCartContext } from "../context/MyCartContext"

const ItemDetail = ({id, name, stock, category, image, description, price, size }) => {
  const [cantidad, setCantidad] = useState(1)
  const [opcion, setOpcion] = useState()
  const navigate = useNavigate()

  const { agregarAlCarrito, isInCart } = useContext(MyCartContext)

  const handleVolver = () => {
    navigate(-1)
  }

  const handleAgregar = () => {
    const item = {
      id, name, stock, category, image, description, price, cantidad, opcion, size
    }

    agregarAlCarrito(item)
  }


  return (
    <div className="">
      <div className="flex flex-wrap">
        <img src={image} alt={name}className="py-4 object-contain lg:h-[600px] w-auto lg:place-self-start" />
        <div className="flex flex-col gap-3 p-4 lg:p-8">
          <h2 className="text-5xl text-primary font-black -mt-4">{name}</h2>
          <p className="text-lg "> Categoria: {category}</p>
          <p className="text-lg ">Talla: US{size}</p>
          <p className="text-lg ">Precio: ${price} USD</p>
        </div>
      </div>
      <div>
        {
          !isInCart(id)
          ? <ItemCount 
          cantidad={cantidad}
          setCantidad={setCantidad}
          onAdd={handleAgregar}
          max={stock}
          /> 
          : <>
          <Link to='/market' className="ramButton bg-blue-600 text-black font-bold">Seguir comprando</Link>
          <Link to='/cart' className="ramButton bg-primary text-black font-bold">Terminar mi compra</Link>
          </>
        }
        <br/>
        <button onClick={handleVolver} className="ramButton ml-2 mt-4 text-black font-bold bg-gray-700">Volver</button>

      </div>
    </div>
  )
}

export default ItemDetail