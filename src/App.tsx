import { useState } from 'react'
import './App.css'
import { MyNavbar } from './components/navbar/navbar'
import { MyHome } from './components/home/home'
import { MyAbout } from './components/about/about'
import { MyProjects } from './components/projects/projects'

function App() {

  return (
    <div className="font-poppins">
      <MyNavbar/>
      <MyHome/>
      <MyAbout/>
      <MyProjects/>
    </div>
  )
}

export default App
