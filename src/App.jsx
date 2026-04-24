import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Colores.css'
import './App.css'
import { Layout } from './components/Layout/Layout'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'



function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Layout>
        <ItemListContainer></ItemListContainer>
      </Layout>
    
  )
}

export default App
