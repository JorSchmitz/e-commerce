import React from 'react'
import './styles/CartProduct.css'

const CartProduct = ({ cartProduct }) => {
  return (
    <article className='cart-product'>
      <h4 className='cart-product__brand'>{cartProduct.brand}</h4>
      <h3 className='cart-product__title'>{cartProduct.title}</h3>
      <div className='cart-product__quantity'>
        <p>{cartProduct.productsInCart.quantity}</p>
      </div>
      <footer className='cart-product__footer'>
        <h3 className='cart-product__price'><span className='cart-product__price-title'>Total:</span> ${cartProduct.price}</h3>
      </footer>
      <i className='cart-product__trash bx bx-trash'></i>
    </article>
  )
}

export default CartProduct