import React from 'react'

const PortfolioItem = ({name, descrption}) => {
    return (
        <article> 
            <figure>
                <img src="" atl=""></img>
            </figure>
            <h4>{name}</h4>
            <p>{descrption}</p>
            <div>
                <a href="#" target="_blank">See code</a>
                <a href="#" target="_blank">See website</a>
            </div>
            <div>
                Tecnologías, se puede recorrer de una lista
            </div>
        </article>
    )
}

export default PortfolioItem
