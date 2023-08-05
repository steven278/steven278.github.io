import './App.css'
import { MyNavbar } from './components/navbar/navbar'
import { MyHome } from './components/home/home'
import { MyAbout } from './components/about/about'
import { MyProjects } from './components/projects/projects'
import { MyExperiences } from './components/experiences/experiences'

import 'flowbite'

function App() {

  return (
    <div className="font-poppins">
      <MyNavbar/>
      <MyHome/>
      <MyAbout/>
      <MyExperiences/>
      <MyProjects/>
    </div>
  )
}

export default App
