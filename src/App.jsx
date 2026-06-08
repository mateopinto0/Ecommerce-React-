import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Colores.css'
import './App.css'
import { Header } from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer'
import { ProductSuccess } from './components/adminComponents/ProductsSuccess'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
      <main>
        <Routes>
          <Route path='/carrito' element={<Cart></Cart>}></Route>
          <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/items/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/admin' element={<ProductFormContainer></ProductFormContainer>}></Route>
          <Route path='/success/:id' element={<ProductSuccess></ProductSuccess>}></Route>
        </Routes>
      </main>
    <Footer></Footer>  
    </>
  )
}

export default App
