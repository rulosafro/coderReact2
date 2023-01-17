import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';


const ItemDetailContainer = () => {
  
  const [item, setItem] = useState(null)
  const [error, setError] = useState(null)
  const { itemId } = useParams()

  console.log(itemId);
  
  useEffect(() => {
    setError(null)

    pedirItemPorId( Number(itemId) )
      .then((data) => {
        setItem(data)
      })
      .catch((err) => {
        setError(err.error)
      })
    }, [itemId])

  return (
    <div className='container mx-auto px-4'>
      {
        error
        ? error
        : item && <ItemDetail {...item}/>
      }
    </div>
  )
}

export default ItemDetailContainer