import '../styles/NavBar.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    //Initiating a hook to create state variable 'isOpen' and function 'setIsOpen' to update the state
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="nav-container">
            <Link to="/" className="nav-name">Jack Lewis</Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/login">FileShare</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
                <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
                <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
            </div>
            {isOpen && (
                <div className="responsive-nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/login">FileShare</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            )}
        </nav>
    )
}

export default NavBar;