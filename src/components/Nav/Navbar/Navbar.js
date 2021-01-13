import React from 'react'
import Burger from '../Burger/Burger'
import PropTypes from 'prop-types';
import './Navbar.scss'

const Navbar = ({openMenu, setOpenMenu}) => {

    const showHideMenu = openMenu ? "navbar__menu navbar__menu--active" : "navbar__menu";
    const showItems = openMenu ? "navbar__item navbar__item--active" : "navbar__item"

    const handleClick = () =>{
        setOpenMenu(false)
    }

    return (
        <nav className="navbar"> 
            <a href="/" className="navbar__logo">LOGO</a>
           
            <ul className={showHideMenu}>
                <li className={showItems}>
                    <a href="#home" className="navbar__item-link" onClick={handleClick}>Home</a>
                </li>
                <li className={showItems}>
                    <a href="#about" className="navbar__item-link" onClick={handleClick}>About</a>
                </li>
                <li className={showItems}>
                    <a href="#portfolio" className="navbar__item-link" onClick={handleClick}>Portfolio</a>
                </li>
                <li className={showItems}>
                    <a href="#" className="navbar__item-link" onClick={handleClick}>Contact</a>
                </li>

            </ul> 
            <Burger 
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            /> 
        </nav>
    )
}

Navbar.propTypes = {
    openMenu: PropTypes.bool.isRequired,
    setOpenMenu: PropTypes.func.isRequired

}

export default Navbar