import React from "react";
import { CartState } from "../context/Context";
import {
  AiFillStar,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ prod, id }) => {
  
  const navigate = useNavigate();

  const {
    state: { cart, wishlistItems },
    dispatch,
  } = CartState();



  return (
    <div className="flex flex-col items-center border-2 rounded-xl">
      <div className="relative group">
        <img
          className="w-24 h-24 my-3 md:w-48 md:h-48"
          src={prod.image}
          alt={prod.title}
        />
        <button
          className="absolute flex items-center justify-center w-full h-10 overflow-hidden font-semibold duration-500 ease-in bg-gray-100 border max-h-0 transition-max-h bottom-3 group-hover:max-h-screen "
          onClick={()=>navigate('/product-details' , {state:{product:prod}})}
        >
          <AiOutlineSearch className="text-xl" />
          <h3 className="ml-2 ">View</h3>
        </button>
      </div>
      <h4 className="mx-4 my-2 text-xs md:text-sm font-700">{prod.title}</h4>
      <div className="flex items-center w-full place-content-evenly">
        <p className="text-xs font-bold md:text-lg ">{` $ ${prod.price}`}</p>
        <p className="flex items-center items-">
          <AiFillStar />
          {prod.rating.rate}
        </p>
      </div>
      <div className="flex items-center w-full my-2 place-content-evenly">
        <div>
          {wishlistItems.some((item) => {
            return item.id === prod.id;
          }) ? (
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_WISHLIST", payload: prod });
              }}
            >
              <AiFillHeart className="text-3xl text-red-500 " />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({ type: "ADD_TO_WISHLIST", payload: prod });
              }}
            >
              <AiOutlineHeart className="text-3xl" />
            </button>
          )}
        </div>
        <div>
          {cart.some((item) => {
            return item.id === prod.id;
          }) ? (
            <div>
              <button
                className="px-3 py-2 my-1 text-xs font-medium text-red-500 md:text-base hover:bg-violet-100 bg-violet-50 rounded-3xl "
                onClick={() => {
                  dispatch({ type: "REMOVE_FROM_CART", payload: prod });
                }}
              >
                Remove from Cart
              </button>
            </div>
          ) : (
            <div>
              <button
                className="px-3 py-2 my-1 text-xs font-medium md:text-base text-primary-color bg-violet-50 hover:bg-violet-100 rounded-3xl"
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: prod });
                }}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
