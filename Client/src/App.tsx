import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Donate from './pages/Donate.tsx';
import Login from './pages/Login.tsx';

import './App.css'

function App() {
  return (
    <Router>
      <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      </main>
    </Router>
  );
}

export default App;