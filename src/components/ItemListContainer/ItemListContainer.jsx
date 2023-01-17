import {useEffect, useState} from 'react'
import { pedirDatos} from '../helpers/pedirDatos.jsx'
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from 'react-router';
import { Filtros } from '../Filtros/Filtros.jsx'



export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoryId, busqueda } = useParams()
    // console.log( busqueda)

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (busqueda) {
                    setProductos( res.filter(prod => prod.name.includes(busqueda)))
                } else if (categoryId) {
                    setProductos(res.filter(prod => prod.category === categoryId))
                } else {
                    setProductos(res)
                }}
            )
            .catch((err) => {
                console.log("Ups parece haber un error");
            })
    }, [categoryId])

  return (
    <div className='container mx-auto px-4'>
        <Filtros/>
        <ItemList productos={productos}/>
    </div>
  )
}

