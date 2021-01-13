import React from 'react'
import PropTypes from 'prop-types';
import './Burger.scss'

const Burger = ({openMenu, setOpenMenu}) => {    
    
    const handleClick = ()=> {
        setOpenMenu(state => !state)
    }

    return (
        <button href="#" className="toogle-button" onClick={handleClick} >
            <div className={`toogle-button__line ${openMenu && 'line1'} `}></div>
            <div className={`toogle-button__line ${openMenu && 'line2'} `}></div>  
            <div className={`toogle-button__line ${openMenu && 'line3'} `}></div>          
        </button>
    )
}

Burger.propTypes = {
    openMenu: PropTypes.bool.isRequired,
    setOpenMenu: PropTypes.func.isRequired
}

export default Burger