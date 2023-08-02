import { useState } from 'react'
import './App.css'
import { MyNavbar } from './components/navbar/navbar'
import { MyHome } from './components/home/home'

function App() {

  return (
    <div className="font-poppins">
      <MyNavbar/>
      <MyHome/>
    </div>
  )
}

export default App
