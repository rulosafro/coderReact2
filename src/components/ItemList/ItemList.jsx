import { Link } from "react-router-dom"
import "./ItemList.sass"

const ItemList = ({productos}) => {
  return (
    <div>
        <section className="sectionWrap bg-green-400">
            { productos.map((prod => (
                <div key={prod.id} className="sectionCard" >
                    <img className="" src={prod.image} alt={prod.name}/>
                    <h4 className="bg-green-400">{prod.name}</h4>
                    <p className="">{prod.description}</p>
                    <p className="">Precio: {prod.price} <span> | </span><small>[{prod.category}]</small></p>
                    <Link className="font-bold py-2 text-black " to={`/detail/${prod.id}`}>Ver más</Link>
                </div>
            )
            ))}
        </section>
    </div>
  )
}

export default ItemList