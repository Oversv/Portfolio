import React from 'react'
import './Skills.scss'
import SkillsItem from './SkillsItem'

const Skills = () => {
    return (
        <section className="skills">
            <h3 className="skills__title">Skills</h3>

            <ul className="skills__list">
                <SkillsItem 
                    title={'HTML'}
                    value={7}
                />
                <SkillsItem 
                    title={'CSS'}
                    value={6}
                />
                <SkillsItem 
                    title={'JavaScript'}
                    value={6}
                />
                <SkillsItem 
                    title={'React'}
                    value={6}
                />
                <SkillsItem 
                    title={'SQL'}
                    value={5}
                />
            </ul>

        </section>
    )
}

export default Skills
