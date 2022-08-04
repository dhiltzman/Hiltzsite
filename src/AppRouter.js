import React from 'react'
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom"

import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import DronePage from './pages/drone'
import HomePage from './pages/home'
import PrintingPage from './pages/printing'
import ResumePage from './pages/resume'
import ProjectsPage from './pages/projects'

import Project1Page from './pages/projects/project1.js'
import Project2Page from './pages/projects/project2.js'
import Project3Page from './pages/projects/project3.js'
import ProjectUpcomingPage from './pages/projects/upcoming.js'

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
            <Route path = "/projects" element={
                <ProjectsPage />
            } />
            <Route path = "/projects/project1" element={
                <Project1Page />
            } />
            <Route path = "/projects/project2" element={
                <Project2Page />
            } />
            <Route path = "/projects/project3" element={
                <Project3Page />
            } />
            <Route path = "/projects/upcoming-projects" element={
                <ProjectUpcomingPage />
            } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter