import Cards from './components/cards'
import Header from './components/header'
import './index.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Cards/>
    </> 
  )
}

export default App
