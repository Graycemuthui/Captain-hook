import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./components/customer";
import Product from "./components/product";
import User from "./authentication/user";
import PrivateText from "./authentication/private_text";
import Order from "./components/order";

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
        <Route path="/customer" element={<Customer />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
