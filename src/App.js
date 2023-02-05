import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
    const { token, setToken } = useToken();

    return(
      <div className="page-container">
          <BrowserRouter>
              <NavBar />
              <div className="content-container">
                  <Routes>
                      <Route exact path="/">
                          <Route index element={<Home />} />
                          <Route exact path="/login" element={ <Login token={token} setToken={setToken}/> } />
                          <Route exact path="/dashboard" element={ <Dashboard /> } />
                          <Route path="/contact" element={ <Contact /> } />
                      </Route>
                  </Routes>
              </div>
          </BrowserRouter>
          <Footer />
      </div>
    );
}

function useToken() {
    const getToken = () => {
        const parsedToken = JSON.parse(localStorage.getItem('token'));
        return parsedToken?.token;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    }

    return {
        setToken: saveToken,
        token
    }
}

export default App;