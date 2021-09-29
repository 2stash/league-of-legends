import React from 'react'
import '../css/Home.scss'
import backgroundImage from '../images/homeBackground.jpg'
import logo from '../images/home-logo5.png'

const Home = () => {
    return (
        <div className="home-container">
            <nav id="home-nav" className="home-nav">
                <div className="nav-left">
                    <img src={logo} alt="logo" />
                    <div className="half-circle"></div>
                    <div className="play-button"></div>
                </div>
                <div className="nav-right"></div>
            </nav>
            <div id="home-main" className="home-main">
                <img src={backgroundImage} alt="background" />
            </div>
            <div id="home-sidebar" className="home-sidebar"></div>
        </div>
    )
}

export default Home
