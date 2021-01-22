import React from 'react'
import './Skills.scss'

const Skills = () => {

    const skills = ['html','css', 'js', 'pug', 'sass', 'react']

    return (
        <section className="skills">
            <h4 className="about__heading">My skills</h4>
            <ul className="skills__list">
                {
                    skills.map(skill => (
                        <li className="skills__item" key={skill}>
                            <img
                                src={`./assets/img/tech-icons/${skill.toLowerCase()}.png`}
                                alt={skill}
                            />  
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Skills