import React from 'react'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import avatar from '../../assets/img/Avatar200.png'
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
        </section>
    )
}

export default Home
