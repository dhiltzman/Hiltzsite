import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom"

import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import DronePage from './pages/drone'
import HomePage from './pages/home'
import PrintingPage from './pages/printing'
import ResumePage from './pages/resume'
import TestPage from './pages/test'

function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/about" element={
                <AboutPage />
            } />
           <Route path = "/contact" element={
                <ContactPage />
            } />     
            <Route path = "/drone" element={
                <DronePage />
            } />                     
            <Route path = "/home" element={
                <HomePage />
            } />
           <Route path = "/3D-Printing" element={
                <PrintingPage />
            } />    
           <Route path = "/resume" element={
                <ResumePage />
            } />                  
            <Route path = "/test" element={
                <TestPage />
            } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter