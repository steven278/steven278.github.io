import Consolepay from '../../assets/Consolepay.jpg'
import Paycation from '../../assets/Paycation.jpg'
import Promato from '../../assets/Promato.png'
import Readingcinemas from '../../assets/Readingcinemas.jpg'
import Sushipay from '../../assets/Sushipay.jpg'
import Secondhand from '../../assets/Secondhand.png'
import Erekapitulasi from '../../assets/e-rekapitulasi.png'
import Dsion from '../../assets/Dsion.png'

import { MyCards } from './cards'
import { motion } from "framer-motion";

export const MyProjects = () => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    return (
        <div id="Projects" className="bg-gray-100 dark:bg-gray-900 flex flex-col justify-center dark:text-gray-100 text-center pt-24">
            <h3 className="text-5xl font-bold">My 
                <span className="text-cyan-400"> Projects</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3
            max-w-screen-xl mx-auto p-4 my-12 gap-x-6 gap-y-10">
                <MyCards image={Readingcinemas}
                    title={"ReadingCinemas"}
                    desc={"A website to display upcoming movies, ongoing movies, popular movies and explore movies based on It's revenue, popularity and votes count. It was created using HTML, CSS, Javascript and Angular"}
                    url={"https://github.com/steven278/Reading-Cinemas"}
                />
                <MyCards image={Sushipay}
                    title={"SushiPay"}
                    desc={"A Japanese food-themed restaurant website with authentication, admin dashboard, and order features. It was created using PHP, CSS, Javascript and MySQL"}
                    url={"https://github.com/steven278/SushiPay"}
                />
                <MyCards image={Consolepay} 
                    title={"ConsolePay"} 
                    desc={"A website for video game console rent with authentication, admin dashboard, and order features. It was created using Laravel and MySQL"} 
                    url={"https://github.com/steven278/ConsolePay"}
                />
                <MyCards image={Paycation}
                    title={"PayCation"}
                    desc={"A website for hotel booking with authentication, admin dashboard, and order features. It was created using Laravel and MySQL"}
                    url={"https://github.com/steven278/Paycation"}
                />
                <MyCards image={Dsion}
                    title={"Dsion"}
                    desc={"An Expert System Website for diagnosing depression. It was created using PHP, HTML, CSS, Javascript, and MySQL"}
                    url={"https://github.com/steven278/Expert-System"}
                />
                <MyCards image={Promato}
                    title={"Promato"}
                    desc={"A Pomodoro timer mobile app with task reminder, to-do-list, and settings features. It was created using Java and Firebase"}
                    url={"https://github.com/steven278/Promato"}
                />
                <MyCards image={Secondhand}
                    title={"SecondHand"}
                    desc={"An e-commerce website for buying and selling used goods with authentication, and shopping cart features. It was created using React.js, Express.js, and PostgreSQL"}
                    url={"https://github.com/steven278/secondhand-backend-group4"}
                />
                <MyCards image={Erekapitulasi}
                    title={"E-Recapitulation"}
                    desc={"A system for storing and displaying the calculation of recapitulation vote result for President and Vice-President based on the blockchain. It was created using React.js, Express.js, PostgreSQL, Web3.js, Solidity and Hardhat"}
                    url={"https://github.com/steven278/e-rekapitulasi-blockchain"}
                />
                <motion.ul
                    className="container"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {[0, 1, 2, 3].map((index) => (
                    <motion.li key={index} className="item" variants={item} />
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}