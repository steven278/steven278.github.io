import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <div className='navbar-container' id='navbarWrapper'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Steven Lie</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="me-auto"></div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#aboutWrapper">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projectWrapper">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experienceWrapper">Experience</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
