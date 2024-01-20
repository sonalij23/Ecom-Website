import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillStar } from "react-icons/ai";
import RecentlyViewed from "./RecentlyViewed";

const SingleProductPage = () => {
  const { dispatch } = CartState();
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state.product;

  const [addItem, setAddItem] = useState(false);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState("");

  const existingRecent =
    JSON.parse(window.localStorage.getItem("recent")) || [];

  const isExistingArray = Array.isArray(existingRecent);

  const isProductInRecent =
    isExistingArray && existingRecent.some((item) => item.id === product.id);

  const updatedRecent =
    isProductInRecent || !isExistingArray
      ? existingRecent
      : [...existingRecent, product];

  window.localStorage.setItem("recent", JSON.stringify(updatedRecent));


  const handleAddItem = () => {
    setAddItem(!addItem);
    if (addItem === false) {
      dispatch({ type: "ADD_TO_CART", payload: { ...product, qty } });
    } else {
      dispatch({ type: "REMOVE_FROM_CART", payload: product });
    }
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    if (/^\d*$/.test(inputValue) && inputValue <= 10) {
      setQty(inputValue);
      setError("");
    } else {
      setError("Quantity must be less or equal to 10.");
    }
  };

  const handleDecrementChange = () => {
    if (qty > 1) {
      const updatedQty = qty - 1;
      setQty(updatedQty);
    }
  };
  const handleIncrementChange = () => {
    if (qty < 10) {
      const updatedQty = Number(qty) + 1;
      setQty(updatedQty);
    } else {
      setError("Quantity must be less or equal to 10.");
    }
  };

  return (
    <div className="bg-gray-100 py-36">
      <div className="flex w-full ">
        <div className="w-2/5">
          <img
            src={product.image}
            alt={product.title}
            className="p-10 bg-white rounded-lg md:mt-24 lg:ml-24 md:h-96 md:w-96"
          />
        </div>
        <div className="w-3/5">
          <div>
            <h1 className="px-4 font-bold md:text-4xl md:mt-14">
              {product.title}
            </h1>

            <p className="px-4 text-xs md:text-base md:mt-10">
              {product.description}
            </p>
            <div className="flex items-center mt-8 ">
              <p className="flex items-center ml-4 mr-6 text-xs md:text-lg">
                <AiFillStar className="mr-2 text-xs md:text-2xl text-amber-400" />
                {product.rating.rate}
              </p>
              <p className="text-xs md:text-lg">
                {product.rating.count} ratings
              </p>
            </div>
            <p className="mt-8 ml-4 text-lg font-semibold md:text-4xl">
              $ {product.price}
            </p>
          </div>
          <div className=" mt-14">
            <h1 className="text-[10px] md:text-base mb-3 text-red-500">
              {error}
            </h1>
            <div className="flex items-center ml-4">
              <div className="flex">
                <button onClick={handleDecrementChange}>-</button>
                <input
                  className="w-4 mx-2 text-xs text-center rounded-sm md:text-base md:w-6 outline outline-1 "
                  type="text"
                  value={qty}
                  onChange={(e) => handleInputChange(e)}
                />
                <button className="mr-2" onClick={handleIncrementChange}>
                  +
                </button>
              </div>

              {addItem ? (
                <div>
                  <button
                    className="px-1 py-2 my-1 text-xs font-medium border-2 border-black md:px-3 md:text-base text-secondary-color hover:bg-violet-100 bg-violet-50 rounded-3xl "
                    onClick={handleAddItem}
                  >
                    Remove from Cart
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="px-1 py-2 my-1 text-xs font-medium border-2 border-black md:px-3 md:text-base text-secondary-color bg-violet-50 hover:bg-violet-100 rounded-3xl"
                    onClick={handleAddItem}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          </div>
          <button
            className="p-2 mt-5 ml-5 text-xs font-semibold text-white rounded-md md:text-base bg-secondary-color"
            onClick={() => navigate("/cart")}
          >
            Go to Cart
          </button>
        </div>
      </div>

      <RecentlyViewed items={existingRecent} />
    </div>
  );
};

export default SingleProductPage;
