import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setBase } from '../redux/reducers/shop'
import '../assets/scss/main.scss'

const Header = () => {
  const selection = useSelector((s) => s.shop.selection)
  const quantity = Object.keys(selection).reduce((acc, rec) => acc + selection[rec], 0)
  const dispatch = useDispatch()
  return (
    <nav className="flex justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {['USD', 'EUR', 'CAD'].map((val) => {
          return (
            <button
              type="button"
              key="val"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3"
              onClick={() => dispatch(setBase(val))}
            >
              {val}
            </button>
          )
        })}
      </div>
      <div className="">
        <NavLink to="/" className="text-white mr-5">
          Main
        </NavLink>
        <NavLink to="/basket" className="text-white mr-5">
          Cart({quantity})
        </NavLink>
        <NavLink to="/logs" className="text-white mr-5">
          Logs
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
