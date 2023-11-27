import "./Header.scss";
import {Phone} from "@phosphor-icons/react";
import React, {useState} from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };
    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <header className="site-header" id="topScroll">
            <div className="header-content">
                <div className="header-top">
                    <a href="tel:123456789" className="header-top-number">
                        <Phone size={18} weight="fill" color="white"/>
                        <p>123 456 789</p>
                    </a>
                </div>
                <div className="header-bottom">
                    <Link to="/" className="header-bottom-logo">
                        <img src="//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2018/02/logo.svg"
                             alt="Site logo"/>
                    </Link>
                    <div className="header-bottom-navigation">
                        <Link to="/" className="nav-item">
                            HOME
                        </Link>
                        <div className="nav-item"
                           onMouseEnter={handleMouseEnter}
                           onMouseLeave={handleMouseLeave}
                        >
                           <Link to="/what'sOn">
                               WHAT'S ON
                           </Link>
                            <div className={`nav-dropdown ${isDropdownOpen ? 'nav-dropdown-active' : ''}`}>
                                <Link to="/allMovies" >
                                    ALL MOVIES
                                </Link>
                            </div>
                        </div>
                        <Link to="/" className="nav-item">
                            NEWS
                        </Link>
                        <Link to="/" className="nav-item">
                            SHORTCODES
                        </Link>
                        <Link to="/" className="nav-item">
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;