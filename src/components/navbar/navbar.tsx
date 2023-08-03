import { IoIosMoon } from 'react-icons/io';
import { HiSun } from 'react-icons/hi';

import './navbar.css'

export const MyNavbar = () => {
  const setDarkMode = () => document.querySelector("html")?.setAttribute("class", "dark")
  const setLightMode = () => document.querySelector("html")?.setAttribute("class", "light")
  const toggleTheme = (e:any) => e.target.checked ? setDarkMode() : setLightMode()

  return (
  <nav className="  fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Steven Lie</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 
      justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
      focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
      aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
              strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      {/* bg-gray-50 md:bg-gray-100 */}
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border 
          md:flex-row md:space-x-8 md:mt-0 md:border-0 
          dark:border-gray-700">
          <li>
            <a href="#home" className=" block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent
            md:text-cyan-500 md:p-0 dark:text-white md:dark:text-cyan-400 transition duration-300" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
            md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-400 transition duration-300
            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
          </li>
          <li>
            <a href="#experiences" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
            md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-400 transition duration-300 
            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experiences</a>
          </li>
          <li>
            <a href="#projects" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
            md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-400 transition duration-300
            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
          </li>
          {/* <li>
            <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
            md:hover:bg-transparent md:border-0 md:hover:text-cyan-500 md:p-0 dark:text-white md:dark:hover:text-cyan-400 transition duration-300 
            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li> */}
          <li>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onChange={toggleTheme}/>
            <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300
            dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]  
            after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:flex after:justify-center after:items-center
            after:bg-white dark:after:bg-gray-800 dark:border-gray-600 peer-checked:bg-gray-200 flex justify-evenly items-center">
              {/* <span className="">🌞</span>
              <span className="">🌛</span>
               */}
              <span><HiSun class=""/></span>
              <span><IoIosMoon className="text-white"/></span>
            </div>
          </label>
          </li>
        </ul>
      </div>
    </div>
    {/* <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto w-full bg-gray-200 rounded-full h-1.5 mb-2 dark:bg-gray-700">
      <div className="bg-cyan-400 h-1.5 rounded-full dark:bg-cyan-400" style={{width: "45%"}}></div>
    </div> */}

  </nav>
  )
}
