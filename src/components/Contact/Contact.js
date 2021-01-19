import React from 'react'
import '../../styles/buttons.scss'

const Contact = ({handleClick}) => {
    return (
        <div>
            <a 
                href="mailto:albertomdv@gmail.com" 
                className="btn btn--important"
                onClick={handleClick}
                >Contact Me</a>            
        </div>     
    )
}

export default Contact
