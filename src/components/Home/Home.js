import React from 'react'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import avatar from '../../assets/img/Avatar200.png'
import cv from '../../assets/data/cv.pdf'
import './Home.scss'

const Home = () => {
    return (
        <section id="home" className="home">
            <h1 className="home__name">Hi, I am Alberto Martínez</h1>
            <h2 className="home__job">I am a Junior Front-End Developer</h2>
            <figure className="home__img-container">
                <img className="home__img" src={avatar} alt="avatar"/>
            </figure>
            <SocialNetworks />   
    
                <a 
                    href={cv} 
                    className="btn btn--important"               
                    target="_blank"
                    rel="noreferrer" 
                    >Resume</a>
        </section>
    )
}

export default Home
