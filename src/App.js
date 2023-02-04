import React, {useState} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Footer from "./components/Footer";
import FileShare from "./components/FileShare";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return(
      <div>
          <BrowserRouter>
              <nav className="nav-container">
                  <Link to="/" className="nav-name">Jack Lewis</Link>
                  <div className="nav-links">
                      <Link to="/">Home</Link>
                      <Link to="/fileshare">FileShare</Link>
                      <Link to="/">Contact</Link>
                  </div>
                  <div className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
                      <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
                      <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
                      <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
                  </div>
                  {isOpen && (
                      <div className="responsive-nav-links">
                          <Link to="/">Home</Link>
                          <Link to="/fileshare">FileShare</Link>
                          <Link to="/">Contact</Link>
                      </div>
                  )}
              </nav>
              <Routes>
                  <Route index path="/">
                      <Home />
                  </Route>
                  <Route exact path="/fileshare">
                      <FileShare />
                  </Route>
              </Routes>
          </BrowserRouter>
          <Footer />
      </div>
    );
}

export default App;