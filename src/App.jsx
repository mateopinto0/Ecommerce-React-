import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Colores.css'
import './App.css'
import { Header } from './components/Header/Header'
import {Footer} from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer'
import { ProductSuccess } from './components/adminComponents/ProductsSuccess'
import { PublicLayout } from './layouts/PublicLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Login } from './components/Login/Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
        <Routes>
          <Route element={<PublicLayout />}>
          <Route path='/carrito' element={<Cart></Cart>}></Route>
          <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/items/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
      </Route>
      <Route path='/login' element={<Login></Login>}></Route>

      <Route path='/admin' 
      element={
        <ProtectedRoute>
        <AdminLayout></AdminLayout>
        </ProtectedRoute>}>

        <Route index element={<Navigate to={"dashboard"} />}></Route>
          <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='new/product' element={<ProductFormContainer></ProductFormContainer>}></Route>
          <Route path='success/:id' element={<ProductSuccess></ProductSuccess>}></Route>
      </Route>    
        </Routes>
       
    </>
  )
}

export default App
