import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/bundle";
import './App.css';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Footer from './pages/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';
import Nav from './pages/Nav';
import Dashboard from './Admin/Dashboard';
import Seles from './Admin/Seles';
import Vendor from './Admin/Vendor';
import Reports from './Admin/Reports';
import Profile from './Admin/Profile';
import Products from './Admin/Products';
import Users from './Admin/Users';
import Error404 from './pages/Error404';
import Cart from './pages/Cart';
import Layouts from './components/Layouts';
import Demopage from './pages/Demopage';
import DemoContent from './pages/DemoContent';


function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Nav open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/admin' element={<Dashboard />}>
          <Route path='user' element={<Users />}></Route>
          <Route path='product' element={<Products />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='reports' element={<Reports />}></Route>
          <Route path='seles' element={<Seles />}></Route>
          <Route path='vendor' element={<Vendor />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
