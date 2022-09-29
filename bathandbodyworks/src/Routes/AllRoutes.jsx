import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './../Components/HomePage';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>  
    </Routes>
  )
}

export default AllRoutes