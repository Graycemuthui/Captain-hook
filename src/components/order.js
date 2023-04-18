import React, { useState, useEffect } from "react";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/v1/orders")
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
