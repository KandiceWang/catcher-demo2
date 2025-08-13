import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router basename="/catcher-demo2">
      <div className="App">
        <Suspense fallback={<div className="loading-spinner"></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* 未来可以添加更多路由 */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;