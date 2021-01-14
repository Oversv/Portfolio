import React from 'react'
import PropTypes from 'prop-types';
import { v4 as id } from 'uuid';

const PortfolioItem = ({name, descrption, img, live, code, technologies =[]}) => {

    const image = `./assets/img/${img}`

    return (
        <article> 
            <figure>
                <img src={image} atl="name"></img>
            </figure>
            <div>
                <h4>{name}</h4>
                <p>{descrption}</p>

                <div>                    
                    <p>Technologies</p>
                    <ul>
                        {
                            technologies.map(tech => (                                
                                <li key={id()}>
                                   <img 
                                        src={`./assets/img/tech-icons/${tech.toLowerCase()}.png`}
                                        alt={tech}
                                    />                            
                                </li>
                                //TODO Mirar como organizan las carpetas de las imagenes estaticas en react
                                //TODO Añadir iconos para las tecnologías                                
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <a href={live} target="_blank">See Website</a>
                    <a href={code} target="_blank">See Code</a>
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
