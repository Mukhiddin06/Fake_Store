import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, SingleProduct } from '../pages'

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<SingleProduct/>}/>
    </Routes>
  )
}

export default CustomRoutes