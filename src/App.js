import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Modal from './components/page/Modal/Modal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<Modal />} />
      </Routes>
    </Router>
  );
}

export default App;