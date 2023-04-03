import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./components/customer";
import Product from "./components/product";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Customer />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </BrowserRouter>
);

export default App;
