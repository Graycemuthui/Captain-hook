import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./components/customer";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Customer />} />
    </Routes>
  </BrowserRouter>
);

export default App;
