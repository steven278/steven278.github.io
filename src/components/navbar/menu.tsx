export const MyMenu = ({id, activeMenu, handleActiveMenu}) => {
    return (
        <li>
            <a href={`#${id}`} className={`block py-2 pl-3 pr-4 md:border-0 
            md:p-0 rounded transition duration-400 text-gray-900 
            dark:text-gray-100 

            ${activeMenu === id ? 'active' : ''}`} 
            onClick={() => handleActiveMenu(id)}>{id}</a>
        </li>
    )
}
// text-gray-900 
//             hover:bg-gray-100 md:hover:bg-transparent md:border-0 rounded 
//             md:hover:text-cyan-500 md:p-0 dark:text-gray-100 
//             md:dark:hover:text-cyan-400 transition duration-300
//             dark:hover:bg-gray-700 dark:hover:text-white
//             md:dark:hover:bg-transparent