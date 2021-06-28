import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToSelection, removeFromSelection } from '../redux/reducers/shop'
import '../assets/scss/main.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const selection = useSelector((s) => s.shop.selection)
  const products = useSelector((s) => s.shop.products)
  const rates = useSelector((s) => s.shop.rates)
  const base = useSelector((s) => s.shop.base)
  const cart = products.filter((item) => Object.keys(selection).includes(item.id))
  const totalSum = Object.keys(selection)
    .reduce((acc, rec) => {
      return (
        acc + products.find((item) => item.id === rec).price * selection[rec] * (rates[base] || 1)
      )
    }, 0)
    .toFixed(2)
  const currency = {
    USD: '$',
    EUR: '€',
    CAD: 'C$'
  }
  return (
    <div>
      <h2 className="mb-10">Basket</h2>
      {cart.map((el) => (
        <div className="flex border-2 border-gray-300 pl-6 mb-6" key={el.id}>
          <div className="w-1/2 my-6">{el.title}</div>
          <div className="selected-btn flex justify-center my-6">
            <button
              type="button"
              className="border-2 border-gray-300 px-3"
              onClick={() => dispatch(removeFromSelection(el.id))}
            >
              -
            </button>
            <span className="mx-3">{selection[el.id] || 0}</span>
            <button
              type="button"
              className="border-2 border-gray-300 px-3"
              onClick={() => dispatch(addToSelection(el.id))}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="text-right">
        <span>
          Total: {totalSum} {currency[base]}
        </span>
      </div>
    </div>
  )
}

export default Cart
