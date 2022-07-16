
// import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/bundle";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './pages/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';
import Nav from './pages/Nav';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Nav open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
