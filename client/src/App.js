import './App.css';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Component/Home';
import End from './Component/End';

function App() {
  return (
    <div className="container mx-auto px-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </div>
  );
}

export default App;
