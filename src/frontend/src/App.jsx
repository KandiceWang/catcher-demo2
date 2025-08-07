import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router basename="/catcher-demo2">
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* 可以在這裡添加更多路由 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
