/*import { useState } from 'react'
 import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 */
import './App.css'
import Boton from './components/Boton'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
