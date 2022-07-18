import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/bundle";
import './App.css';
// 
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './pages/Nav';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './pages/Footer';
import Home from './pages/Home';
import Dashboard from './Admin/Dashboard';
import Seles from './Admin/Seles';
import Vendor from './Admin/Vendor';
import Reports from './Admin/Reports';
import Profile from './Admin/Profile';
import Products from './Admin/Products';
import Users from './Admin/Users';
import Error404 from './pages/Error404';
import Cart from './pages/Cart';
import Nav from './pages/Nav';


function App() {

  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Home />} />
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
    </div>
  )




}

export default App;
