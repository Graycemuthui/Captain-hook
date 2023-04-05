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
    <div className="products">
      <h1>Our Collection</h1>
      {products.map((product) => (
        <div key={product.id} className="product-description">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image_url} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default Product;
