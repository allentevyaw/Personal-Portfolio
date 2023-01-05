import { useState } from 'react'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/navbar'
import Skill from './components/Skill'


function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
    </div>
  )
}

export default App
