import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillStar } from "react-icons/ai";
import { CartState } from "../context/Context";
 
const RecentlyViewed = ({items}) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="px-5 py-16 my-20 bg-gray-200 " >
           <h1 className="mb-12 text-3xl font-bold text-lef text-primary-color">Recently Viewed</h1>
      <Carousel responsive={responsive} autoPlay= {true}	 autoPlaySpeed= {2000} rewind={true} 	>

        {items && items.length > 0 ? (
          items.map((prod) => (
            <div
              className="h-56 mx-2 my-4 text-center bg-white border-2 shadow-xl border-violet-300 rounded-2xl w-44 md:w-52 md:h-72 "
              key={prod.id}
            >
              <img
                className="w-20 h-20 mx-auto my-3 md:w-24 md:h-24"
                src={prod.image}
                alt={prod.title}
              />
              <h4 className="mx-4 my-2 text-[10px] md:text-sm font-700">
                {prod.title.length > 30
                  ? `${prod.title.slice(0, 30)}...`
                  : prod.title}
              </h4>
              <div className="flex items-center w-full place-content-evenly">
                <p className="text-[10px] font-bold md:text-lg ">{` $ ${prod.price}`}</p>
                <p className="flex items-center text-[10px] md:text-base">
                  <AiFillStar className="mx-2" />
                  {prod.rating.rate}
                </p>
              </div>
              <div className="flex items-center w-full my-2 place-content-evenly">
                <div>
                  {cart.some((item) => {
                    return item.id === prod.id;
                  }) ? (
                    <div>
                      <button
                        className="px-3 py-2 my-1 text-xs font-medium md:text-base text-secondary-color hover:bg-violet-100 bg-violet-50 rounded-3xl "
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
                        className="px-3 py-2 my-1 text-xs font-medium md:text-base text-secondary-color bg-violet-50 hover:bg-violet-100 rounded-3xl"
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
          ))
        ) : (
       <h1>No items Found</h1>
        )}
      </Carousel>
    </div>
  );};

export default RecentlyViewed;
