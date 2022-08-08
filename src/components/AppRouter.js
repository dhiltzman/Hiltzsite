import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import DronePage from '../pages/drone';
import HomePage from '../pages/home';
import PrintingPage from '../pages/printing';
import ResumePage from '../pages/resume';

import InebriatatorPage from '../pages/projects/inebriatator';
import LEDZillaPage from '../pages/projects/LEDZilla';
import HackathonPage from '../pages/projects/weCAPTCHA';
import UpcomingProjectsPage from '../pages/projects/upcoming';

import ResumeDownload from '../components/documents/Hiltzman_Resume_Fall_2022_v1_0.pdf';

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
            <Route path = "/" element={
                <HomePage />
            } />
           <Route path = "/3D-Printing" element={
                <PrintingPage />
            } />    
           <Route path = "/resume" element={
                <ResumePage />
            } />                  
            <Route path = "/projects/inebriatator" element={
                <InebriatatorPage />
            } />
            <Route path = "/projects/LEDZilla" element={
                <LEDZillaPage />
            } />
            <Route path = "/projects/weCAPTCHA" element={
                <HackathonPage />
            } />
            <Route path = "/projects/upcoming-projects" element={
                <UpcomingProjectsPage />
            } />

            <Route path = "/resume/download" element={
                <ResumeDownload />
            } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter