import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
  
  const [item, setItem] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    const docRef = doc(db,"productos", itemId)
    getDoc(docRef)
      .then((doc) => { 
        setItem( {...doc.data(), id: doc.id})
       })
    }, [itemId])

  return (
    <div className='container mx-auto px-4'>
      {
        item && <ItemDetail {...item}/>
      }
    </div>
  )
}

export default ItemDetailContainer