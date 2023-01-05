import { useState } from 'react'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/navbar'


function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
