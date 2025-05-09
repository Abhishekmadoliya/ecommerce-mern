

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import products from '../../data/products';

import { useSelector, useDispatch } from "react-redux";
import { addTocart } from "../../../redux/cartSlice";
import axios from "axios";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [products, setProduct] = useState(null);

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart ? cart : "empty");

  const { id } = useParams();
  const navigate = useNavigate();


  async function getProductById() {
    try{const res = await axios.get(
      `http://localhost:5000/products/${id}`
    );

    const data = res.data
    // const data = await res.json();
    console.log(res, "data");

     setProduct(data)
     console.log(products, "products");
    }catch(err){
      console.log("error,in datafetch",err);
      
    }
  }


 


  useEffect(() => {
    getProductById();
  }, [id]);

  console.log(products,"products");
  if (!products) {
    return <p>Loading...</p>;  // Show loading indicator if product is null
  }

  const onAddtoCartClick = () => {
    const obj = {
      title: products.title,
      price: products.price,
      image: products.images[0]?.url,
      stock: products.stock
        ? products.stock < 10
          ? "few in stock"
          : "in stock"
        : "oops! not in stocks",
    };

    dispatch(addTocart(obj));
    navigate("/cart", { state: obj });
  };
  return (
    <>
  
    <div className="p-5 bg-gray-50 min-h-screen">
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-white p-6 rounded-2xl shadow-lg">
          {/* Image Section */}
          <div className="w-full">
            <img
              src={products.images[0]?.url}
              alt="product"
              className="w-full rounded-xl object-cover"
            />
          </div>
  
          {/* Details Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {products.title}
            </h1>
            <p className="text-gray-600 mb-4 text-sm">{products.description}</p>
  
            {/* Price & Stock Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <p className="text-2xl font-semibold text-blue-600">
                ₹{products.price}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 font-medium">
                  ⭐ {products.ratings.average}
                </span>
                <span className="text-sm text-gray-500">
                  ({products.ratings.count} reviews)
                </span>
              </div>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  products.stock
                    ? products.stock < 10
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {products.stock
                  ? products.stock < 10
                    ? "Few in stock"
                    : "In stock"
                  : "Out of stock"}
              </span>
            </div>
  
            {/* Actions */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={onAddtoCartClick}
                className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-2 rounded-lg shadow hover:cursor-pointer"
              >
                Add to Cart
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-100 transition font-medium px-6 py-2 rounded-lg hover:cursor-pointer">
                ❤️ Add to Favorites
              </button>
            </div>
  
            <hr className="my-6" />
  
            {/* Additional Info */}
            <p className="text-sm text-gray-700 leading-relaxed">
              Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
              Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
              Magic Keyboard or Magic Keyboard with Touch ID.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  


  </>
  );
};

export default ProductDetails;
