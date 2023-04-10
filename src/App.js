import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/bundle";
import './App.css';
// 
// import Login from './pages/Login';

// import Register from './pages/Register';


import { Routes, Route, Link } from "react-router-dom";

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
import MainAdmin from './Admin/mainAdmin/MainAdmin';
import OrderPage from './Admin/OrderPage';
import Categories from './Admin/Products/Categories';
import ProductList from './Admin/Products/ProductList';
import AddProducts from './Admin/Products/AddProducts';
import SubCategories from './Admin/Products/SubCategories';
import AdminLogin from './Admin/AdminLogin';
import { useState } from 'react';
import Login from './authentication/Login';
import Resistration from './authentication/Resistration';



function App() {

  const [ display,setDisplay ] = useState(false)

  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Resistration />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/admin' element={display? <AdminLogin />: <Dashboard/>}>
          <Route path='user' element={<Users />}></Route>
          <Route path='dashboard' element={<MainAdmin />}></Route>
          <Route path='product' element={<Products />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='reports' element={<Reports />}></Route>
          <Route path='seles' element={<Seles />}> </Route>
          <Route path='seles/order' element={<OrderPage />}></Route>
          {/* <Route path='seles/transection' element={<Transections />}></Route> */}
          <Route path='vendor' element={<Vendor />}></Route>
          {/* product page */}
          <Route path='catagories' element={<Categories />}></Route>
          <Route path='subcatagories' element={<SubCategories />}></Route>
          <Route path='addproduct' element={<AddProducts />}></Route>
          <Route path='productList' element={<ProductList />}></Route>
        </Route>
      </Routes>
    </div>
  )




}

export default App;
