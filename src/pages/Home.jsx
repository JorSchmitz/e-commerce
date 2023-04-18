import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import ProductCard from '../components/home/ProductCard'
import Categories from '../components/home/Categories'
import './styles/Home.css'

const Home = () => {

  const [nameProduct, setNameProduct] = useState("")
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState("")

  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newName = e.target.nameProduct.value
    setNameProduct(newName)
  }

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    setFilterProducts(products)
  }, [products])

  useEffect(() => {
    const newProducts = products.filter(product => product.title.toLowerCase().includes(nameProduct.toLowerCase()) && (product.category.id === category || !category))
    setFilterProducts(newProducts)
  }, [nameProduct, category])

  return (
    <main className='home'>
      <form className='home__form' onSubmit={handleSubmit}>
        <div className='home__form-div'>
          <input className='home__form-input' type="text" id='nameProduct' placeholder='What are you looking for?' />
          <button className='home__form-btn'><i className='bx bx-search'></i></button>
        </div>
      </form>
      <Categories setCategory={setCategory} />
      <section className='home__container'>
        {
          filterProducts.map(product => <ProductCard key={product.id} product={product} />)
        }
      </section>
    </main>
  )
}

export default Home