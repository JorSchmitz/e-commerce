import React, { useState } from 'react'
import './styles/ProductInfo.css'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'

const ProductInfo = ({ product }) => {

  const dispatch = useDispatch()

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

  const addProduct = () => {
    const data = {
      id: product.id,
      quantity: quantity
    }
    dispatch(addProductCart(data))
  }

  return (
    <article className='product-info'>
      <div className='product-info__img'>
        <img src={product?.productImgs[0]} alt="" />
      </div>
      <div className='product-info__info'>
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
          <button className='product-info__btn' onClick={addProduct}>Add to cart <i className='bx bx-cart'></i></button>
        </footer>
      </div>
    </article>
  )
}

export default ProductInfo