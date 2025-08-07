import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TalentsPage from './pages/search/TalentsPage';
import TalentDetailPage from './pages/talents/TalentDetailPage';
import JobsPage from './pages/search/JobsPage';
import JobDetailPage from './pages/jobs/JobDetailPage';
import './App.css';

function App() {
  return (
    <Router basename="/catcher-demo2">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/talents" element={<TalentsPage />} />
          <Route path="/talents/:id" element={<TalentDetailPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          {/* 可以在這裡添加更多路由 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
