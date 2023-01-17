import '../styles/NavBar.css';
import {useState} from "react";

function NavBar() {
    //Initiating a hook to create state variable 'isOpen' and function 'setIsOpen' to update the state
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="nav-container">
            <a href="/" className="nav-name">Jack Lewis</a>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
                <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
                <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
            </div>
            {isOpen && (
                <div className="responsive-nav-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            )}
        </nav>
    );
}

export default NavBar;