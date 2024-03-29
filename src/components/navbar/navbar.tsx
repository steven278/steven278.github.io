import { IoIosMoon } from 'react-icons/io';
import { HiSun } from 'react-icons/hi';

import './navbar.css'

import { MyMenu } from './menu.tsx'
import MyLogo from '../../assets/logo-no-background.svg'
import MyLogoDark from '../../assets/logo-no-background-dark-mode.svg'

export const MyNavbar = () => {
  //dark mode - light mode toggle functions
  const setDarkMode = () => document.querySelector("html")?.setAttribute("class", "dark")
  const setLightMode = () => document.querySelector("html")?.setAttribute("class", "light")
  const toggleTheme = (e:any) => e.target.checked ? setDarkMode() : setLightMode()

  //active navbar menu function
  // const [activeMenu, setActiveMenu] = useState<string>('home');
  // const handleActiveMenu = (item: string) => {
  //   setActiveMenu(item)
  // }

  return (
  <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center">
          <img src={MyLogo} className="h-8 mr-3 dark:hidden" alt="My Logo" />
          <img src={MyLogoDark} className="h-8 mr-3 hidden dark:inline" alt="My Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-100">Steven Lie</span>
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
            <MyMenu id="Home"/>
            <MyMenu id="About"/>
            <MyMenu id="Experiences"/>
            <MyMenu id="Projects"/>
          <li className="max-md:pl-3 max-md:py-2">
            <label className=" relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onChange={toggleTheme}/>
              <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300
              dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
              peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]  
              after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:flex after:justify-center after:items-center
              after:bg-white dark:after:bg-gray-800 dark:border-gray-600 peer-checked:bg-gray-200 flex justify-evenly items-center">
                <span><HiSun className=""/></span>
                <span><IoIosMoon className="text-white"/></span>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
