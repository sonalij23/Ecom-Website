import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { CartState } from "../context/Context";

import QtyCounter from "./QtyCounter";

const CheckoutSidebar = () => {
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

  const payment = (total) => {
    navigate("/payment", { state: { total } });
  };

  return (
    <div className="md:w-1/3 sm:w-1/2 mr-4 md:mr-0  w-full py-5  lg:mx-10 mt-10 border-[1px] rounded-md shadow-md		">
      <div className="mx-5">
        <h1 className="my-10 text-2xl font-semibold sm:text-xl md:text-3xl">Order Summary</h1>
        <div>
          {cart.length ? (
            <div>
              {cart.map((prod) => (
                <div key={prod.id} className="flex my-4 ">
                  <img
                    className="w-20 h-20 rounded-md"
                    src={prod.image}
                    alt={prod.title}
                  />
                  <div className="mx-2">
                    {prod.title.length > 50 ? (
                      <h4 className="text-sm font-semibold md:text-sm sm:text-xs ">{`${prod.title.slice(
                        0,
                        50
                      )}...`}</h4>
                    ) : (
                      <h4 className="text-sm font-semibold md:text-sm sm:text-xs ">{prod.title}</h4>
                    )}
                    <p className="my-2 text-sm ">
                      Price: $ {(prod.price * prod.qty).toFixed(2)}
                    </p>
                    <div className="flex items-center my-4 ">
                      <div className="flex ">
                        <p className="mr-1 text-xs"> Qty :</p>
                        <QtyCounter
                          qty={prod.qty}
                          updateQty={updateQty}
                          id={prod.id}
                          checkout={true}
                        />
                      </div>
                      <div>
                        <button
                          className="p-1 text-xs rounded-md md:text-base md:ml-6 hover:text-red-700 hover:bg-red-200"
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
                  </div>
                </div>
              ))}
            </div>
          ) : (
            (() => navigate("/cart"))()
          )}
        </div>
        <div className="mt-12 border-t-2 ">
          <div className="flex justify-between mt-5 font-semibold md:text-base ">
            <h2> Subtotal: </h2>
            <h2> $ {total.toFixed(2)}</h2>
          </div>
          <div className="flex justify-between mt-5 font-semibold md:text-base">
            <h2> Shipping Price: </h2>
            <h2> $ 20</h2>
          </div>
          <div className="flex justify-between mt-5 font-semibold md:text-lg">
            <h2> Total Price: </h2>
            <h2> $ {Number(total.toFixed(2)) + 20}</h2>
          </div>
        </div>
        <div className="my-5 text-center">
          <button
            className="inline-block p-2 font-semibold text-white rounded-lg md:text-xl bg-secondary-color hover:bg-purple-400 "
            onClick={() => payment(total)}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSidebar;
