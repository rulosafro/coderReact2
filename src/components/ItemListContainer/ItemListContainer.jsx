import {useEffect, useState} from 'react'
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from 'react-router';
import { Filtros } from '../Filtros/Filtros.jsx'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../firebase/config.js';



export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId, busqueda } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef
        getDocs(q)
            .then((resp) => { 
                setProductos(resp.docs.map((doc) => { 
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }))
             })
             .finally(() => { 
                setLoading(false)
              })

    }, [categoryId])
 
  return (
    <div className='container mx-auto px-4'>

        <Filtros/>
        <ItemList productos={productos}/>
    </div>
  )
}

