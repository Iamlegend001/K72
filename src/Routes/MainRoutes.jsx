import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from '../Pages/Projects'
import Home from '../Pages/Home'
import Agence from '../Pages/Agence'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/agence" element={<Agence />} />
    </Routes>
  )
}

export default MainRoutes