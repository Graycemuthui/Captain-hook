import React, { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      fetch("http://127.0.0.1:3000/api/v1/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [products]);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>
          <img src={product.image_url} alt={product.name} />
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
