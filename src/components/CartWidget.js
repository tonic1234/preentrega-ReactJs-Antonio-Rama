import React from 'react'

const CartWidget = (prop) => {
  return (
    <div className='navBar_cartDiv'>
      <div className='navBar_cartItemsBubble'><p className='navBar_cartItemsCounter'>{prop.items}</p></div>
      <img className='navBar_cartWidget' src='/img/carrito.svg' />
      </div>
  )
}

export default CartWidget