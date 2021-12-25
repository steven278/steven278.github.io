import React from 'react';
import ProfilePic from '../../assets/blue.svg';
import './Profile.css';

export default function Profile() {
    return (
        <div className='container-fluid mt-2' id="profile-wrapper">
            <div className="row" id='profileRow'>
                <div className='col-xxl-6 col-xl-6' id='profiledetailwrapper'>
                    <div className='profile-details' data-aos="fade-right" data-aos-duration="2000">
                        <h1 id='hi'>Hi, I'm</h1>
                        <h1 id='MyName'>Steven Lie</h1>
                        <h2 id='briefIntro'>A 3<sup>rd</sup> Year Computer Science Student at Multimedia Nusantara University</h2>
                        <a id='btnAboutMe' href='#aboutContainer'>About Me</a>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6" id="profilepicwrapper">
                    <img data-aos="fade-left" data-aos-duration="2000" src={ProfilePic} alt=""  id="profilepic"/>
                </div>
            </div>
        </div>
    )
}
