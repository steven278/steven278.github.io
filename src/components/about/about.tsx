import HeroPic from '../../assets/blue.svg'

export const MyAbout = () => {
    return (
        <div id="About" className="bg-gray-100 dark:bg-gray-900 flex flex-col justify-center dark:text-gray-100">
            <div className="grid md:grid-rows-1 md:grid-cols-2 grid-rows-2
            max-w-screen-xl mx-auto p-4
            mt-36 mb-40 ">
                <div className=" flex justify-center">
                    <img src={HeroPic} alt="Profile Picture" className=''/>
                </div>
                <div className="flex flex-col justify-center text-center md:text-left md:items-start gap-4 gap-y-6 ">
                    <h3 className="text-5xl font-bold">About 
                        <span className="text-cyan-400"> Me</span>
                    </h3>
                    <h4 className="text-3xl font-bold">Backend Developer</h4>
                    <p className="text-lg">Hello, my name is Steven, an enthusiastic Informatics fresh graduate of Multimedia Nusantara University. Currently seeking for a job as a web developer to pursue my passion for web development, especially as a backend developer. I am a reliable, trustworthy, hardworking, and flexible individual who can learn new skills easily and execute them swiftly</p>
                    {/* <p className="text-">A Last Year Computer Science Student at Multimedia Nusantara University</p> */}
                    {/* <a href="">Read More</a> */}
                </div>
            </div>
        </div>
    )
}