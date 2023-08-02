import HeroPic from '../../assets/blue.svg'
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'

export const MyHome = () => {
    return (
        <div id="home" className=" bg-gray-100 dark:bg-gray-900 flex flex-col justify-center">
            <div className="grid grid-cols-2  max-w-screen-xl mx-auto p-4 my-12">
                <div className=" flex flex-col justify-center gap-4">
                    <h3 className="text-4xl font-bold dark:text-gray-200">Hello, It's Me</h3>
                    <h1 className="text-7xl font-bold dark:text-gray-200">Steven Lie</h1>
                    <h3 className="text-3xl font-bold dark:text-gray-200">And I'm a <span className="text-cyan-400 text-4xl">
                            <Typewriter 
                            words={['Backend Developer', 'Web Developer']}
                            loop={false}
                            cursor={true} />
                        </span>
                    </h3>
                    {/* <p>A Last Year Computer Science Student at Multimedia Nusantara University</p> */}
                    <div className="flex gap-6 items-center dark:text-gray-200 mt-5">
                        <a href="https://www.linkedin.com/in/steven-lie-015971210/" target="_blank"><FaLinkedin className='w-10 h-10 border-2
                        rounded-full p-2 text-cyan-400 border-cyan-400 transition duration-500 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-400/50'/></a>
                        <a href="https://github.com/steven278" target="_blank"><FaGithub className='w-10 h-10 border-2
                        rounded-full p-2 text-cyan-400 border-cyan-400 transition duration-500 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-400/50'/></a>
                        <a href="https://www.instagram.com/steven_lie9/" target="_blank"><FaInstagram className='w-10 h-10 border-2
                        rounded-full p-2 text-cyan-400 border-cyan-400 transition duration-500 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-400/50'/></a>
                        <a href="https://wa.me/082110693513" target="_blank"><FaWhatsapp className='w-10 h-10 border-2
                        rounded-full p-2 text-cyan-400 border-cyan-400 transition duration-500 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-400/50 '/></a>
                    </div>
                    <a href="#" className="w-44 text-center p-3.5 rounded-full
                    bg-cyan-400 mt-5 text-lg font-bold shadow-lg
                    shadow-cyan-400/50 transition-shadow duration-500 hover:shadow-none">Download CV</a>
                </div>
                <div className="">
                    <img src={HeroPic} alt="Profile Picture" className=''/>
                </div>
            </div>
        </div>
    )
}