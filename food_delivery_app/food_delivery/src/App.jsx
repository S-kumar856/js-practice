import React from 'react'
import Login from './components/Login/Login'
import Routess from './routes/Routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Restaurants from './pages/Restaurants'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Routess />} >
          <Route path="food" element={<Home/>} />
          <Route path='restaurant' element={<Restaurants />} />
          </Route>
        </Routes>
       
      </BrowserRouter>
    </>
  )
}

export default App
