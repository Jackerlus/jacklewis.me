import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/App.css";
import Home from "./components/Home";
import FileShare from "./components/FileShare";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
    return(
      <div className="page-container">
          <BrowserRouter>
              <NavBar />
              <div className="content-container">
                  <Routes>
                      <Route path="/">
                          <Route index element={<Home />} />
                          <Route path="/fileshare" element={ <FileShare/> } />
                          <Route path="/contact" element={ <Contact /> } />
                      </Route>
                  </Routes>
              </div>
          </BrowserRouter>
          <Footer />
      </div>
    );
}

export default App;