import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Navbar from './components/navBar/NavBar';
import HomePage from './pages/homePage/homePage';
import InfoPage from './pages/infoPage/infoPage';
import CompPage from './pages/compPage/compPage';
import TopPage from './pages/topPage/topPage';
import TrainingPage from './pages/trainingPage/trainingPage';
import TrainingLevelPage from './pages/trainingPage/trainingLevelPage';
import LogInPage from './pages/logInPage/logInPage';

function App() {

  const { levelss } = useParams();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/comp" element={<CompPage />} />
        <Route path="/top" element={<TopPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/training/:level" element={<TrainingLevelPage level={Number(levelss)}/>} />
        <Route path="/login" element={<LogInPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
