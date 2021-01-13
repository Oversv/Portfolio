import React from 'react'
// import Skills from '../Skills/Skills'
import './About.scss'

const About = () => {
    return (
        <section className="about" id="about">
            <h3 className="about__title">About Me</h3>

            <section className="about__info">
                <h4 className="about__heading">My name is Alberto Martínez</h4>
                <p className="about__content">I am a graduated Higher Technician in Development of Web Applications, currently seeking a permanent career as a web developer.</p> 
                <p className="about__content">I am looking for a position as a Front End Developer in Manchester area and its surroundings, to gain experience in the field.</p>
                <p className="about__content">I am willing to contribute with my ICT expertise (I have a background working with computers both hardware and software for 3 years), my hard work and my ability to work both independently and in a team. </p>
                <p className="about__content">I learn fast and I enjoy learning from others and contributing with my problem-solving skills.</p>
            </section>

            <section>
                <h4 className="about__heading">Education</h4>
                <p>Ilerna Online</p>
            </section>
            {/* //TODO: Implementar lista de iconos */}
            {/* <Skills /> */}
        </section>
    )
}

export default About
