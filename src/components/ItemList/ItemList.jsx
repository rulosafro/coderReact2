import { Link } from "react-router-dom"
import "./ItemList.sass"
import { useContext } from "react"
import { MyCartContext } from "../context/MyCartContext"

const ItemList = ({productos}) => {

  const { agregarAlCarrito} = useContext(MyCartContext)


  return (
    <div>
        <section className=" flex flex-wrap justify-center">
            { productos.map((prod => (
                <div key={prod.id} className="sectionCard" >
                    <h4 className="text-xl font-extrabold p-2">{prod.name}</h4>
                    <img className="" src={prod.image} alt={prod.name}/>
                    <span className=" text-xl font-bold">{prod.type}</span>
                    <p className="">   ${prod.price} |  US {prod.size}</p>
                    <Link className="font-bold py-2 bg-primary text-black w-20 m-2 rounded-2xl text-center mx-auto hover:bg-white" to={`/detail/${prod.id}`}>Ver más</Link>
                    {/* <button onClick={handleAgregar}>Agregar al Carrito</button> */}
                </div>
            )))}
        </section>
    </div>
  )
}

export default ItemList