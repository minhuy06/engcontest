import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Import CSS tổng thể
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import ParagraphPage from './pages/ParagraphPage';
import ParagraphDetail from './pages/ParagraphDetail';

function App() {
  // Single Page Application
  return (
    <>
      <NavigationBar />
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/paragraph" element={<ParagraphPage />} />

        <Route path="/para/:para_id" element={<ParagraphDetail />} />
      </Routes>

    </>
  );
}

export default App;