import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Colores.css'
import './App.css'
import { Header } from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
      <main>
        <ItemListContainer></ItemListContainer>
      </main>
    <Footer></Footer>  
    </>
  )
}

export default App
