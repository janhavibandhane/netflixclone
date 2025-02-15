import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Home/Hero'
import Nav from './Home/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Hero />
    </>
  )
}

export default App
