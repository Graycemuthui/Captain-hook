import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./components/customer";
import Product from "./components/product";
import User from "./authentication/user";
import Signup from "./authentication/signup";
import PrivateText from "./authentication/private_text";
import Login from "./authentication/login";
import Order from "./components/order";
import Detail from "./pages/productDetail";

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
