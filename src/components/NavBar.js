import '../styles/NavBar.css';

function NavBar() {
    return(
        <nav className="navigation">
            <a href="/" className="name">
                Jack Lewis
            </a>
            <div className="navigation-menu">
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;