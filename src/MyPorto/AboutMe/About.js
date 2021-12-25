import React from 'react'
import './About.css';
import AboutPic from '../../assets/programming.svg';
import {FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

export default function About() {
    return (
        <div className='container-fluid' id='aboutWrapper' >
            <div className="row" id='aboutContainer'>
                <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-12 col-sm-12 col-xs-12" data-aos="fade-right" id='imgAboutWrapper'>
                    <img src={AboutPic} alt="profile pic" className='rounded-circle' id='imgAbout' data-aos="fade-right" data-aos-duration="2000"/>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-8" data-aos="fade-up" data-aos-duration="2000" id='cardAboutWrapper'>
                    <div className="card shadow-lg projectCard" >
                        <div className="row g-0">
                            <div className="card-body">
                                <h1 id='titleAbout'>About Me</h1>
                                <p id='contentAbout'>Hello, my name is Steven, an enthusiastic Informatics student at Multimedia Nusantara University. Currently seeking for Internship as a web developer to pursue my passion for web development, especially as a backend developer. I am a reliable, trustworthy, hardworking, and flexible individual who can learn new skills easily and execute them swiftly</p>
                                <div className="contact-icons d-flex justify-content-around">
                                    <a href="https://github.com/steven278" target="_blank" className='contactIcon'><FaGithub/></a>
                                    <a href="https://www.linkedin.com/in/steven-lie-015971210/" target="_blank" className='contactIcon'><FaLinkedin/></a>
                                    <a href="mailto:steven.lie@student.umn.ac.id" target="_blank" className='contactIcon'><FiMail/></a>
                                    <a href="https://www.instagram.com/steven_lie9/" target="_blank" className='contactIcon'><FaInstagram/></a>
                                    <a href="https://api.whatsapp.com/send/?phone=6282119769782&text&app_absent=0" target="_blank" className='contactIcon'><FaWhatsapp/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
