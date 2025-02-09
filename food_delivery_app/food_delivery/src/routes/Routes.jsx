import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Headers from '../components/layout/Header'
import Home from '../pages/Home'

const Routess = () => {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Routess
