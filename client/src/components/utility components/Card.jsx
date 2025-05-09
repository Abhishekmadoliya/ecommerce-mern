import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Card = () => {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const res = await axios.get("https://ecommerce-mern-6fek.onrender.com/products");
    // const data = await res.json

    console.log(res);

    setProducts(res.data);
  }
  console.log(products, "products");

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6 text-center sm:text-left">
          Customers also purchased
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => Navigate(`/product-details/${product._id}`)}
            >
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.alt || "product"}
                className="w-full h-60 object-cover rounded-md bg-gray-200 group-hover:opacity-75"
              />
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-sm text-gray-700 font-semibold">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ₹ {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
