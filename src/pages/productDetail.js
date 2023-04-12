import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  // fetch data based on id
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:4000/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div class="bg-white">
      <div class="pt-6">
        {products.map((product) => (
          <div
            key={product.id}
            class="product-description col-span-1 flex flex-col bg-white border-2 p-2 h-full"
          >
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={product.image_url}
                  alt={product.name}
                  class="h-full w-full object-cover object-center"
                />
              </div>

              <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product.name}
                  </h1>
                </div>
                <div class="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 class="sr-only">Product information</h2>
                  <p class="text-3xl tracking-tight text-gray-900">
                    {product.price}
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

export default Detail;
