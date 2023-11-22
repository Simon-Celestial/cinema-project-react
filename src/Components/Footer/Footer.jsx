import "./Footer.scss";
import {useState} from 'react';
import {TwitterLogo, FacebookLogo, GoogleLogo} from "@phosphor-icons/react";
import React from "react";


const Footer = () => {
    const [hoverStates, setHoverStates] = useState({
        twitter: false,
        facebook: false,
        google: false,
    });

    const handleMouseEnter = (icon) => {
        setHoverStates((prev) => ({ ...prev, [icon]: true }));
    };

    const handleMouseLeave = (icon) => {
        setHoverStates((prev) => ({ ...prev, [icon]: false }));
    };

    return (
        <div className="footer-content">
            <div className="footer-menu-cards">
                <div className="menu-card">
                    <h2>GET IN TOUCH</h2>
                    <a href="#">FAQs</a>
                    <a href="#">Give us feedback</a>
                    <a href="#">Contact us</a>
                </div>
                <div className="menu-card">
                    <h2>ABOUT MOVIE STAR</h2>
                    <a href="#">FAQs</a>
                    <a href="#">Give us feedback</a>
                    <a href="#">Contact us</a>
                </div>
                <div className="menu-card">
                    <h2>LEGAL STUFF</h2>
                    <a href="#">FAQs</a>
                    <a href="#">Give us feedback</a>
                    <a href="#">Contact us</a>
                </div>
                <div className="menu-card">
                    <h2>CONNECT WITH US</h2>
                    <a href="https://xenothemes.co.uk/specto/#" title="Twitter" target="_blank"
                       onMouseEnter={() => handleMouseEnter('twitter')}
                       onMouseLeave={() => handleMouseLeave('twitter')}
                    >
                        <TwitterLogo size={18} weight="fill"
                                     color={hoverStates.twitter ? '#fbbd61' :'rgba(255, 255, 255, .3)'}/>
                        Twitter </a>
                    <a href="https://xenothemes.co.uk/specto/#" title="Twitter" target="_blank"
                       onMouseEnter={() => handleMouseEnter('facebook')}
                       onMouseLeave={() => handleMouseLeave('facebook')}
                    >
                        <FacebookLogo size={18} weight="fill"
                                      color={hoverStates.facebook ? '#fbbd61' :'rgba(255, 255, 255, .3)'}/>
                        Facebook </a>
                    <a href="https://xenothemes.co.uk/specto/#" title="Twitter" target="_blank"
                       onMouseEnter={() => handleMouseEnter('google')}
                       onMouseLeave={() => handleMouseLeave('google')}
                    >
                        <GoogleLogo size={18} weight="fill"
                                    color={hoverStates.google ? '#fbbd61' :'rgba(255, 255, 255, .3)'}/>
                        Google +</a>
                </div>

            </div>
            <div className="footer-copyright">
                <p>2020 © Specto. All rights reserved.</p>
            </div>

        </div>
    )
}
export default Footer;