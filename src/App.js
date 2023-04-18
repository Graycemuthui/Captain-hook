import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customer from "./components/Customer";
import Product from "./components/Product";
import User from "./authentication/User";
import Signup from "./authentication/Signup";
import PrivateText from "./authentication/Private_text";
import Login from "./authentication/Login";
import Order from "./components/Order";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<User currUser={currUser} setCurrUser={setCurrUser} />}
        />
        <Route path="/private" element={<PrivateText currUser={currUser} />} />
        <Route path="/signup" element={<Signup currUser={currUser} />} />
        <Route path="/login" element={<Login currUser={currUser} />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
