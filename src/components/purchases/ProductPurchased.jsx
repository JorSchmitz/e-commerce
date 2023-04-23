import React from 'react'
import './styles/ProductPurchased.css'

const ProductPurchased = ({ product }) => {
  return (
    <article className='product__purchased'>
      <h4 className='product__purchased-title'>{product.title}</h4>
      <h4 className='product__purchased-quantity'>{product.productsInCart.quantity}</h4>
      <h4 className='product__purchased-price'>$ {(product.productsInCart.quantity * product.price).toFixed(2)}</h4>
    </article>
  )
}

export default ProductPurchased