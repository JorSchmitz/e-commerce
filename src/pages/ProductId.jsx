import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProducts from '../components/productId/SimilarProducts'
import './styles/ProductId.css'

const ProductId = () => {

  const [product, setProduct] = useState()
  const [categories, setCategories] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProduct(res.data.data.product))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/categories`
    axios.get(URL)
      .then((res) => {
        setCategories(res.data.data.categories)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <main className='product-id'>
      <ProductInfo product={product} />
      <SimilarProducts product={product} categories={categories} />
    </main>
  )
}

export default ProductId