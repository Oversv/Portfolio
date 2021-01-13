import React from 'react'
import { IconContext } from "react-icons";
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import './SocialNetworks.scss'

const SocialNetworks = () => {
    return (
        <IconContext.Provider value={{ size: "3rem" }}>
            <ul className="socialNetworks">         
                <li className="socialNetworks__item">
                    <a href="https://www.linkedin.com/in/alberto-mdv/" className="socialNetworks__link" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                </li>
                <li className="socialNetworks__item">
                    <a href="https://github.com/Oversv" className="socialNetworks__link" target="_blank" rel="noreferrer"><FaGithub /></a>
                </li>         
                <li className="socialNetworks__item">
                    <a href="https://twitter.com/Over_" className="socialNetworks__link" target="_blank" rel="noreferrer"><FaTwitter /></a>
                </li>

            </ul>
        </IconContext.Provider>
    )
}

export default SocialNetworks
