import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Headers from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Headers/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
