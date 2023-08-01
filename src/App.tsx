import { useState } from 'react'
import './App.css'
import { MyNavbar } from './components/navbar/navbar'

function App() {

  return (
    <>
    <MyNavbar/>
    <div className="bg-[url('https://picsum.photos/200')] w-500"></div>
    </>
  )
}

export default App
