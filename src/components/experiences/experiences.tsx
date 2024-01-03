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
                date={"August 2023 - November 2023"} 
                title={"Programmer - PT. Sofco Graha"} 
                descriptions={[
                  'Developed and improved an Enterprise Resource Planning (ERP) web application as a Full Stack Developer within a collaborative team environment.',
                  'Utilized Java Spring Boot for backend development, Angular Typescript for frontend, and PostgreSQL for database management, ensuring a stable, user-friendly ERP system.'  ,
                  'Contributions led to significant enhancements in functionality and user experience, resulting in a more efficient and effective ERP application.'
                ]}/>
                {/* <MyTimeline
                date={"February 2022 - July 2023"} 
                title={"Backend Javascript - Binar Academy (Bootcamp)"} 
                description={"Learned Express.js, PostgreSQL, Git, Restful API, and created a dummy e-commerce website as its last project."}/> */}
                <MyTimeline
                date={"August 2022 - January 2023"} 
                title={"Web Developer - PT. Multimedia Digital Nusantara (Internship)"} 
                descriptions={[
                    'Led a team in developing a robust E-procurement website as a Backend Developer using Django 4 framework, SQLite for the database, and Javascript/HTML for frontend support.',
                    'Successfully completed the E-procurement website, meeting project requirements and ensuring its functional integrity.',
                    'Demonstrated leadership skills while overseeing the development process, resulting in a fully functional and robust E-procurement platform for PT. Multimedia Digital Nusantara.'
                ]}/>
            </ol>
        </div>
    </div>
    )
}