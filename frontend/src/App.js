import React from 'react'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart';
import Success from './pages/Success';
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AboutUs from './pages/AboutUs'

function App() {

  const user = useSelector((state) => state.user.currentUser);
  

  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/login" element={user?<Navigate to="/home"/> : <Login/>}/>
          <Route path="/signup" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/home" element={<Home2 />} />
        </Routes>
    </Router>
  )
}

export default App