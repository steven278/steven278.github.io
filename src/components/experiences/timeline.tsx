interface Props 
{date: String;
title: String;
descriptions: [];};


export const MyTimeline = ({date, title, descriptions}:Props) => {
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full mt-1.5 -left-1.5 border border-cyan-400 dark:border-cyan-500 dark:bg-cyan-500"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                {date}
            </time>
            <h3 className="my-1 text-lg font-semibold text-gray-900 dark:text-white">
                {title}
            </h3>
            <ul className="list-outside ml-5">
                {descriptions.map((description) => {
                        return (
                            <li className="list-disc text-gray-500 dark:text-gray-300">
                                <p className="mb-1 text-base font-normal">
                                    {description}
                                </p>
                            </li>
                        )
                    })}
            </ul>
            
            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> */}
        </li>
    )
}