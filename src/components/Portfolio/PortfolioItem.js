import React from 'react'
import PropTypes from 'prop-types';
import { v4 as id } from 'uuid';

const PortfolioItem = ({name, descrption, img, live, code, technologies =[]}) => {
   
    const image = `./assets/img/portfolio/${img}`

    return (
        <article className="project-card"> 
            <figure className="project-card__image-container">
                <img src={image} atl={name}></img>
            </figure>
            <div>
                <h4 className="project-card__title">{name}</h4> 
                <ul className="project-card__list-tech">
                    {
                        technologies.map(tech => (                                
                            <li className="project-card__list-item" key={id()}>
                                <img 
                                    src={`./assets/img/tech-icons/${tech.toLowerCase()}.png`}
                                    alt={tech}
                                />                            
                            </li>                                
                        ))
                    }
                </ul>                
                <p className="project-card__description">{descrption}</p>
                
                <div className="project-card__button-container">
                    <a href={live} target="_blank" className="project-card__button">See Website</a>
                    <a href={code} target="_blank" className="project-card__button">See Code</a>
                </div>
            </div>
        </article>
    )
}

PortfolioItem.propTypes = {
    name: PropTypes.string.isRequired,
    descrption: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default PortfolioItem
