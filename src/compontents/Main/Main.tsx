import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Catalog, Checkout, Home, NotFound, Product } from '../../pages'

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
        <Route
          path='checkout'
          element={<Checkout/>}
        />
        <Route
          path='*'
          element={<NotFound/>}
        />

    </Routes>
  )
}

export default Main