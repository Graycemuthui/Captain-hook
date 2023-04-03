import React, { useState, useEffect } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>
          <p>{product.image_url}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
