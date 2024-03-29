import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { RoomContext } from "../context";

const Detail = () => {
  const { addCart } = useContext(RoomContext);
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:4000/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="bg-white d-flex justify-content-center container mt-5">
        <div className="pt-6">
          <div className="product-description col-span-1 flex flex-col bg-white border-2 p-2 h-full">
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-80 w-full object-cover object-center"
                />
              </div>

              <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product.name}
                  </h1>
                </div>
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">
                    ${product.price}
                  </p>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    style={{
                      backgroundColor: "#f55a98",
                      color: "white",
                      border: "none",
                      borderRadius: "30px",
                      padding: "10px 20px",
                      marginTop: "20px",
                    }}
                    onClick={() => addCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
