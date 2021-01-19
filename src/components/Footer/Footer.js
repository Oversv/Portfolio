import React from 'react'
import Contact from '../Contact/Contact'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <SocialNetworks />
            <div className="footer__contact">
                <Contact />       
            </div>
        </footer>
    )
}

export default Footer