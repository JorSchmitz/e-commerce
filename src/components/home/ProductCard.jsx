import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/ProductCard.css'

const ProductCard = ({ product }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${product.id}`)
  }

  const addCart = (e) => {
    e.stopPropagation()
  }

  return (
    <article className='product-card' onClick={handleClick}>
      <header className='product-card__header'>
        <img src={product.productImgs[0]} alt="" />
      </header>
      <div className='product-card__body'>
        <h3 className='product-card__title'>{product.title}</h3>
        <h4 className='product-card__title-price'>Price</h4>
        <span className='product-card__price'>$ {product.price}</span>
        <button className='product-card__btn' onClick={addCart}>
          <i className='bx bx-cart'></i>
        </button>
      </div>
    </article>
  )
}

export default ProductCard