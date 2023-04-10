import React, { useState, useEffect } from "react";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/orders", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  return (
    <div>
      <h2>Orders</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <p>{order.total_price}</p>
        </div>
      ))}
    </div>
  );
};

export default Order;
