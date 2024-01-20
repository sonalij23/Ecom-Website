import React from "react";
import { AiFillStar, AiOutlineDelete } from "react-icons/ai";
import { CartState } from "../context/Context";

const WishListCard = ({ prod, id }) => {
  const { dispatch } = CartState();

  const moveToCart = () =>{
    dispatch({type: "ADD_TO_CART", payload: prod})
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: prod })
  }

  return (
    <div className="flex flex-col items-center border-2 rounded-xl">
      <img
        className="w-24 h-24 my-3 md:w-48 md:h-48"
        src={prod.image}
        alt={prod.title}
      />
      <h4 className="mx-4 my-2 text-xs md:text-sm font-700">{prod.title}</h4>
      <div className="flex items-center w-full place-content-evenly">
        <p className="text-xs font-bold md:text-lg ">{` $ ${prod.price}`}</p>
        <p className="flex items-center items-">
          <AiFillStar />
          {prod.rating.rate}
        </p>
      </div>
      <div className="flex items-center w-full my-2 place-content-evenly">
        <button
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_WISHLIST", payload: prod });
          }}
          className="p-1 text-xl rounded-md hover:text-red-700 hover:bg-red-200"
        >
          <AiOutlineDelete />
        </button>
        <button onClick={() => moveToCart()} className="px-3 py-2 my-1 font-medium text-secondary-color hover:bg-violet-100 bg-violet-50 rounded-3xl ">
          Move to Cart
        </button>
      </div>
    </div>
  );
};

export default WishListCard;
