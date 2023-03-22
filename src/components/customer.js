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

  const renderCustomers = () => {
    return customers.map((customer) => {
      return (
        <div key={customer.id}>
          <h3>{customer.first_name}</h3>
          <p>{customer.last_name}</p>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h1>Customers</h1>
      {renderCustomers()}
    </div>
  );
};

export default Greeting;
