import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './header1'
import Catalog from './catalog'
import { getProducts, getRates } from '../redux/reducers/shop'
import Cart from './cart'
import Logs from './logs'
import '../assets/scss/main.scss'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
    dispatch(getRates())
  })
  return (
    <div>
      <Header />
      <div className="container m-auto my-6">
        <Route exact path="/" component={() => <Catalog />} />
        <Route exact path="/basket" component={() => <Cart />} />
        <Route exact path="/logs" component={() => <Logs />} />
      </div>
    </div>
  )
}

export default Home
