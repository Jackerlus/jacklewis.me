import '../styles/NavBar.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";

function NavBar() {
    //Initiating a hook to create state variable 'isOpen' and function 'setIsOpen' to update the state of the menu
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="nav-container">
            <Link to="/" className="nav-name">Jack Lewis</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <a href="mailto:jack.lewis159@gmail.com">Contact Me</a>
                {/*<Link to="/contact">Contact</Link>*/}
            </div>
            <OutsideClickHandler
                onOutsideClick={() => {
                    if (isOpen) {
                        setIsOpen(!isOpen);
                    }
                }
            }>
            <div className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
                <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
                <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
            </div>
            </OutsideClickHandler>
            {isOpen && (
                <div id="mobile-menu" className="responsive-nav-links">
                    <Link to="/">Home</Link>
                    <a href="mailto:jack.lewis159@gmail.com">Contact Me</a>
                    {/*<Link to="/contact">Contact</Link>*/}
                </div>
            )}
        </nav>
    )
}

export default NavBar;