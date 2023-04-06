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
    <div className="bg-white">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        OUR COLLECTION
      </h2>
      <div className=" px-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-10">
        {products.map((product) => (
          <div key={product.id} className="product-description">
            <div className="mt-6">
              <div className="group relative">
                <div>
                  <img src={product.image_url} alt={product.name} />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg text-red-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
