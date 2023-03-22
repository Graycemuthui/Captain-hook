import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/customers/customers";
import "../App.css";

const Customers = () => {
  const displayCustomers = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  });

  return (
    <div className="App">
      <h2>Greeting</h2>
      <p>{displayCustomers}</p>
    </div>
  );
};

export default Customers;
