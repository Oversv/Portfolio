import React from 'react'
import PortfolioItem from './PortfolioItem'
import dataJson from '../../assets/data/projects.json'
import './Portfolio.scss'

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h3>Portfolio</h3>
            {
                dataJson.map(projects =>{           
                    return( 
                        <PortfolioItem  
                            key={projects.id}
                            name={projects.name}
                            descrption={projects.description}
                            img={projects.img}
                            live={projects['url-live']}
                            code={projects['url-code']}
                            technologies={projects.technologies}
                        />
                    )
                })                
            }           
        </section>
    )
}

export default Portfolio
