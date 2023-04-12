import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900  text-center">
        OUR COLLECTION
      </h2>
      <Link to="/product/:id">
        <div className=" px-4 pt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-10 cursor-pointer ">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-description col-span-1 flex flex-col bg-white border-2 p-2 h-full"
            >
              <div className="mt-6">
                <div className="group relative">
                  <div>
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
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
      </Link>
    </div>
  );
};

export default Product;
