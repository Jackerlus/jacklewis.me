import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './Home';
import NavBar from "./components/NavBar";
// import Resume from "./Resume";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NavBar />
      <Home />
  </React.StrictMode>
);