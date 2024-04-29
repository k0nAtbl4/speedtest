import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import HomePage from './pages/homePage/homePage';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>

  );
}

export default App;
