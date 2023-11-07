import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/articles" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
  </Router>
  );
}

export default App;
