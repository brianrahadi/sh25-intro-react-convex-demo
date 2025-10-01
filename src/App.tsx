import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import GuestbookSection from './components/GuestbookSection'

function App() {

  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AboutSection/>
        <ProjectsSection/>
        <GuestbookSection/>
      </main>
      <script src="script.js"></script>
    </>
  )
}

export default App