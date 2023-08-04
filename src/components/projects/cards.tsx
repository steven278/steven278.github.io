import { BsGithub } from 'react-icons/bs'

export const MyCards = ({image, title, desc, url}) => {
    return (
        <div className="max-w-sm border border-gray-200 
        rounded-lg dark:bg-cyan-50/10 dark:border-gray-700
        flex flex-1 flex-col justify-between shadow-md
        hover:shadow-2xl hover:shadow-cyan-500/50 
        hover:scale-[1.025] ease-in duration-300
        dark:hover:shadow-cyan-300/50
        backdrop-filter backdrop-blur-sm bg-gray-50/30">
            <a href={url} target="_blank">
                <img className="rounded-t-lg" src={image} alt="" />
            </a>
            <div className="p-5 flex flex-1 flex-col justify-between items-center">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </a>
                <p className="mb-4 mt-2 font-normal text-gray-700 dark:text-gray-300">
                    {desc}
                </p>
                <a href={url} target="_blank" className="inline-flex items-center px-3.5 py-2.5 
                text-sm font-medium text-center
                text-gray-100 bg-cyan-400 rounded-full hover:bg-cyan-500
                focus:ring-4 focus:outline-none focus:ring-blue-300 
                dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:text-gray-900
                dark:focus:ring-blue-800 ease-in duration-300">
                    Read more &nbsp;&nbsp;<BsGithub className="text-lg"/>
                    {/* <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg> */}
                </a>
            </div>
        </div>
    )
}