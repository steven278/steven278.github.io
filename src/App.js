import Navbar from './MyPorto/Navbar/Navbar';
import Profile from './MyPorto/Home/Profile';
import About from './MyPorto/AboutMe/About';
import Project from './MyPorto/Projects/Project';
import Experience from './MyPorto/Experience/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
