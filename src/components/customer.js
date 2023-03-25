import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../redux/customers/customers";
import "../App.css";

const Greeting = () => {
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers([dispatch]));
  });

  return (
    <div className="App">
      {customers.map((customer) => (
        <div key={customer.id}>
          <h1>{customer.first_name}</h1>
          <h2>{customer.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default Greeting;
