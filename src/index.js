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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
