import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import './App'


function App() {

  return (
    <>
    
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
