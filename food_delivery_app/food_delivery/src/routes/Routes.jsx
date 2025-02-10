import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Headers from '../components/layout/Header'
import Home from '../pages/Home'
import Restaurants from '../pages/Restaurants'

const Routess = () => {
  return (
    <>
      <BrowserRouter>
        <Headers/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/restaurant' element={<Restaurants/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default Routess
