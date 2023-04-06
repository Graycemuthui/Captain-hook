import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./components/customer";
import Product from "./components/product";
import User from "./components/authentication/user";
import PrivateText from "./components/authentication/private_text";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
