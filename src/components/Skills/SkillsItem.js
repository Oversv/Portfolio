import React from 'react'
import PropTypes from 'prop-types';

const SkillsItem = ({title, value}) => {

    const level = `level-${value}`
    
    return (
        <li>
            <h5 className="skills__item-title">{title}</h5>
            <div className="skills__item-bar">
                <span className={`skills__item-progress-bar ${level}`}></span>    
            </div>  
        </li>
    )
}

SkillsItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).isRequired
}

export default SkillsItem
