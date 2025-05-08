import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ChatDashboard from './components/ChatDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/semantic-search" element={<ChatDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
