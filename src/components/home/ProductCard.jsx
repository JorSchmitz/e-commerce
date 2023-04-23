import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/ProductCard.css'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'

const ProductCard = ({ product }) => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleClick = () => {
    navigate(`/products/${product.id}`)
  }

  const addCart = (e) => {
    e.stopPropagation()
    const data = {
      id: product.id,
      quantity: 1
    }
    dispatch(addProductCart(data))
  }

  return (
    <article className='product-card' onClick={handleClick}>
      <header className='product-card__header'>
        <img className='product-card__header-img1' src={product.productImgs[0]} alt="" />
        <img className='product-card__header-img2' src={product.productImgs[1]} alt="" />
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