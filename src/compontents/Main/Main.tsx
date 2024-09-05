import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Catalog, Home } from '../../pages'

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
    </Routes>
  )
}

export default Main