import React from 'react'
import ProductPurchased from './ProductPurchased'
import { changeDateFormat } from '../../utils/date'
import './styles/PurchaseCard.css'

const PurchaseCard = ({ purchase }) => {
  return (
    <article className='purchase__card'>
      <h2 className='purchase__card-date'>{changeDateFormat(purchase.createdAt)}</h2>
      <hr className='purchase__card-line' />
      <section className='purchase__card-list'>
        {
          purchase.cart.products.map(product => <ProductPurchased key={product.id} product={product} />)
        }
      </section>
    </article>
  )
}

export default PurchaseCard