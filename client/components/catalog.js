import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToSelection, removeFromSelection, sortProducts } from '../redux/reducers/shop'
import '../assets/scss/main.scss'

const Catalog = () => {
  const dispatch = useDispatch()
  const products = useSelector((s) => s.shop.products)
  const selection = useSelector((s) => s.shop.selection)
  const rates = useSelector((s) => s.shop.rates)
  const base = useSelector((s) => s.shop.base)
  console.log(rates)
  const currency = {
    USD: '$',
    EUR: '€',
    CAD: 'C$'
  }
  return (
    <div>
      <select className="mb-10" onChange={(e) => dispatch(sortProducts(e.target.value))}>
        <option value="">Sort by</option>
        <option value="lowest">Lowest</option>
        <option value="highest">Highest</option>
      </select>
      <div className="flex flex-wrap -mx-5">
        {products.map((el) => (
          <div key={el.id} className="w-1/4 px-5 mb-5 text-center">
            <div className="border-2 border-gray-200 h-full">
              <img src={el.image} alt="" className="inline-block" />
              <h4>{el.title}</h4>
              <p>
                {(el.price * rates[base]).toFixed(2)} {currency[base]}
              </p>
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalog
