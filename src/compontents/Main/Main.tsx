import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Catalog, Home, Product } from '../../pages'

const Main = () => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home/>}
        />
        <Route
          path='catalog'
          element={<Catalog/>}
        />
        <Route
          path='product/:id'
          element={<Product/>}
        />
        <Route
          path='cart'
          element={<Cart/>}
        />
    </Routes>
  )
}

export default Main