import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom"

import HomePage from './pages/home'
import TestPage from './pages/test'

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "/home" element={
                <HomePage />
            } />
            <Route path = "/test" element={
                <TestPage />
            } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter