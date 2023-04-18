import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../home/ProductCard'

const SimilarProducts = ({ product, categories }) => {

  const [productsByCategory, setProductsByCategory] = useState()

  useEffect(() => {
    if (categories && product) {
      const category = categories.filter(category => category.name === product.category)
      const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=${category[0].id}`
      axios.get(URL)
        .then((res) => {
          const productsFilter = res.data.data.products.filter(productCategory => productCategory.id !== product.id)
          setProductsByCategory(productsFilter)
        }).catch((err) => {
          console.log(err)
        })
    }
  }, [categories, product])

  return (
    <section className='home__container' style={{ marginTop: '20px' }}>
      {
        productsByCategory?.map(productByCategory => <ProductCard product={productByCategory} key={productByCategory.id} />)
      }
    </section>
  )
}

export default SimilarProducts