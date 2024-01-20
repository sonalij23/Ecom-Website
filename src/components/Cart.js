import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { AiOutlineDelete } from "react-icons/ai";
import shoppingImage from "../images/shopping.png";
import { useNavigate } from "react-router-dom";
import QtyCounter from "./QtyCounter";
import Footer from "./Footer";


const Cart = () => {
  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const updateQty = (id, qty) => {
    dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  };

  return (
    <div className="h-screen mt-16 md:mt-20 ">
      {cart.length ? (
        <div className="flex w-full ">
          <div className="w-3/4 ">
            {cart.map((prod) => (
              <div className="flex items-center my-4 space-x-4 h-50" key={prod.id}>
             <img
                  className="w-8 h-8 object-fit md:w-48 md:h-48"
                  src={prod.image}
                  alt={prod.title}
                />
                <div className="h-full">
                  <h4 className="text-[8px] md:text-base font-bold ">
                    {prod.title}
                  </h4>
                  <p className="text-[9px] md:text-sm py-1">{`$  ${parseFloat(
                    prod.price * prod.qty
                  ).toFixed(2)}`}</p>
                  <p className="text-[9px] md:text-sm py-1  ">{`Rating  ${prod.rating.rate}`}</p>
                </div>

                <div className="flex pr-1 md:px-12">
                  <QtyCounter
                    qty={prod.qty}
                    updateQty={updateQty}
                    id={prod.id}
                  />
                  <button  className="p-1 text-xs rounded-md md:text-base md:ml-6 hover:text-red-700 hover:bg-red-200"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/4 h-screen text-[10px] text-center bg-violet-300 sticky right-0 top-16 md:top-20 z-1 ">
            <h2 className="mt-12 font-bold md:text-xl text-purple-950">{`Total Amount $ ${total.toFixed(2)}`}</h2>
            <button onClick={()=>{navigate("/checkout")}} className=" py-1 mx-1 md:mx-auto mt-12 font-bold text-[8px] text-white bg-black md:p-3 md:text-sm rounded-3xl hover:bg-primary-color" >Procced to checkout</button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full ">
          <div className="flex flex-col items-center justify-center ">
            <img
              className="w-1/4 h-auto"
              src={shoppingImage}
              alt="shopping-cart"
            />
            <h1 className="my-2 font-bold text-md md:text-lg">
              Hey, Your Cart is Empty!
            </h1>
            <p className="mb-6 text-sm">
              Let's add some items from your wishlist.
            </p>

            <button
              onClick={() => navigate("/wishlist")}
              className="p-2 border-2 text-secondary-color hover:bg-violet-100 bg-violet-50"
            >
              ADD ITEMS FROM WISHLIST
            </button>
          </div>
        </div>
      )}
      <Footer/>

    </div>
  );
};

export default Cart;
