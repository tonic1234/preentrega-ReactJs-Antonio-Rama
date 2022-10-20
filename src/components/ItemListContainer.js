import React from 'react'
import Navbar from './Navbar'

function ItemListContainer(prop) {
  return (
    <>
    <Navbar/>
    <p className='greeting'>{prop.greeting}</p>
    </>
  )
}

export default ItemListContainer