import { MyTimeline } from './timeline'

export const MyExperiences = () => {
    return (
    <div id="Experiences" className="bg-gray-100 dark:bg-gray-900 flex flex-col justify-center dark:text-gray-100">
        <h3 className="text-5xl font-bold text-center mt-32">My 
                <span className="text-cyan-400"> Experiences</span>
        </h3>
        <div className="max-w-screen-xl mx-auto p-4 my-16 mb-40 px-10">
            <ol className="relative border-l border-cyan-400 dark:border-cyan-500">                  
                <MyTimeline
                date={"February 2022 - July 2023"} 
                title={"Backend Javascript - Binar Academy (Bootcamp)"} 
                description={"Learned Express.js, PostgreSQL, Git, Restful API, and created a dummy e-commerce website as its last project."}/>
                <MyTimeline
                date={"August 2022 - January 2023"} 
                title={"Web Developer - PT. Multimedia Digital Nusantara (Internship)"} 
                description={"Developing a procurement management platform for PT. MDN using Django 4 and being responsible for analyzing the Kampus Merdeka System at Universitas Multimedia Nusantara."}/>
            </ol>
        </div>
    </div>
    )
}