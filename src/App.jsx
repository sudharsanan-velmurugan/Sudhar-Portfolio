import React from 'react'
import './App.css'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
const App = () => {
  return (
    <div>     
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App