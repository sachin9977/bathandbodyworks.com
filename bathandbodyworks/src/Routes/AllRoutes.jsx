import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './../Components/HomePage';
import SignupLogin from './../Components/SignupLogin';


function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>  
        <Route path='/SignupLogin' element={<SignupLogin/>}></Route>  
    </Routes>
  )
}

export default AllRoutes