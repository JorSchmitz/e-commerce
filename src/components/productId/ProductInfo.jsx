import React, { useState } from 'react'
import './styles/ProductInfo.css'

const ProductInfo = ({ product }) => {

  const [quantity, setQuantity] = useState(1)

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleMinus = () => {
    const newValue = quantity - 1
    if (newValue >= 1) {
      setQuantity(newValue)
    }
  }

  return (
    <article className='product-info'>
      <h2 className='product-info__title'>{product?.title}</h2>
      <p className='product-info__description'>{product?.description}</p>
      <footer className='product-info__footer'>
        <div className='product-info__container-price'>
          <h3 className='product-info__price-title'>Price</h3>
          <span className='product-info__price'>{product?.price}</span>
        </div>
        <div className='product-info__container-quantity'>
          <h3 className='product-info__quantity-title'>Quantity</h3>
          <div className='product-info__container-counter'>
            <div className='product-info__minus' onClick={handleMinus}>-</div>
            <div className='product-info__counter'>{quantity}</div>
            <div className='product-info__plus' onClick={handlePlus}>+</div>
          </div>
        </div>
        <button className='product-info__btn'>Add to cart <i className='bx bx-cart'></i></button>
      </footer>
    </article>
  )
}

export default ProductInfo