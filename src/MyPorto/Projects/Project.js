import React from 'react'
import './Project.css';
import Sushipay from '../../assets/sushipay.JPG';
import Consolepay from '../../assets/consolepay.JPG';
import Paycation from '../../assets/paycation.JPG';
import ReadingCinemas from '../../assets/readingcinemas.JPG';
import Promato from '../../assets/promato.svg';
import {SiFirebase, SiPhp, SiMysql} from 'react-icons/si';
import {FaExternalLinkAlt, FaGithub, FaLaravel, FaJava} from 'react-icons/fa';
import {DiHtml5, DiCss3, DiJavascript, DiAngularSimple} from 'react-icons/di';

function Item(props){
    if(props.left){ /*<div className={"card mb-5 col-sm-8 shadow-lg projectCard" + (props.left? "" : " offset-sm-3")} data-aos={`${props.fade}`} data-aos-duration="3000">*/
        return <div className="card mb-5 col-sm-8 shadow-lg projectCard" data-aos="fade-right" data-aos-duration="3000">
                    <div className="row g-0">
                        <div className="col-md-6 p-4 ps-md-0">
                            <img src={props.img} className="img-fluid rounded-start imgProject" alt="projectImg"/>
                        </div>
                        <div className="col-md-6 ">
                            <div className="card-body">
                                <h5 className="card-title">{props.name}</h5>
                                <p className="card-text">{props.desc}</p>
                                
                                <i>{props.logos}</i>
                                <a className='projectURL' href={props.url} target="_blank"><FaExternalLinkAlt/></a>
                                <a className='projectURL' href={props.github} target="_blank"><FaGithub/></a>
                            </div>
                        </div>
                    </div>
                </div>
    }
    return <div className="card mb-5 col-sm-8 shadow-lg projectCard offset-3" data-aos="fade-left" data-aos-duration="3000">
                <div className="row g-0">
                    <div className="col-md-6 p-4 ps-md-0">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.desc}</p>
                            <i>{props.logos}</i>
                            <a className='projectURL' href={props.url} target="_blank"><FaExternalLinkAlt/></a>
                            <a className='projectURL' href={props.github} target="_blank"><FaGithub/></a>
                        </div>
                    </div>
                    <div className="col-md-6 p-4 ps-md-0">
                        <img src={props.img} className="img-fluid rounded-start imgProject" alt="projectImg"/>
                    </div>
                </div>
            </div>
}

export default function Project() {
    return (
        <div className='container-fluid 'id='projectWrapper'>
            <div className="row">
                <h1 id='projectTitle'>Projects</h1>
                <Item name="Reading Cinemas" desc ="A website to display upcoming movies, ongoing movies, popular movies and explore movies based on It's revenue, popularity and votes count. It was created using HTML, CSS, Javascript and Angular" img={ReadingCinemas} logos={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiAngularSimple/>]} url="https://reading-cinemas.herokuapp.com/" github="https://github.com/steven278/Reading-Cinemas" left/>
                <Item name="SushiPay" desc ="A Japanese food-themed restaurant website with authentication, admin dashboard, and order features. It was created using PHP, CSS, Javascript and MySQL" img={Sushipay} logos={[<SiPhp/>,<DiCss3/>,<DiJavascript/>, <SiMysql/>]} url="https://sushipay-pemweb.xyz/" github="https://github.com/steven278/SushiPay"/>
                <Item name="Paycation" desc ="A website for hotel booking with authentication, admin dashboard, and order features. It was created using Laravel and MySQL" img={Paycation} logos={[<FaLaravel/>,<SiMysql/>]} fade="fade-right" url="https://hotel.sushipay-pemweb.xyz/" github="https://github.com/steven278/Paycation" left/>
                <Item name="Consolepay" desc ="A website for video game console rent with authentication, admin dashboard, and order features. It was created using Laravel and MySQL" img={Consolepay} logos={[<FaLaravel/>,<SiMysql/>]} url="https://console.sushipay-pemweb.xyz/" github="https://github.com/steven278/ConsolePay"/>
                <Item name="Promato" desc ="A Pomodoro timer mobile app with task reminder, to-do-list, and settings features. It was created using Java and Firebase" img={Promato} logos={[<FaJava/>,<SiFirebase/>]} fade="fade-right" url="https://play.google.com/store/apps/details?id=id.ac.umn.promato" github="https://github.com/steven278/Promato" left/>
            </div>
        </div>
    )
}
