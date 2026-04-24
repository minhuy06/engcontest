import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Import CSS tổng thể
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import ParagraphPage from './pages/ParagraphPage';

function App() {
  // Single Page Application
  return (
    <BrowserRouter> 
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/paragraph" element={<ParagraphPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;