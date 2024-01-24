import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Info from './Components/Info';
import name from './Components/name.png'; // Assuming name.png is in the Components folder
import './Navbar.css';

const App = () => {
  return (
    <Router>
      <nav>
        <img src={name} alt="Logo" className="logo" />
        <ul>
          <li className='link'>
            <Link to="/">Home</Link>
          </li>
          <li className='link'>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
};

export default App;
