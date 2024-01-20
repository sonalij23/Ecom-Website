import React from "react";
import { CartState } from "../context/Context";
import WishListCard from "./WishListCard";
import favouriteImage from "../images/favourite.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const WishList = () => {

  const navigate = useNavigate();

  const {
    state: { wishlistItems },
  } = CartState();

  return (
    <div className="h-screen mt-28">
      {wishlistItems.length>0 ? (
        <div className="grid col-span-2 gap-5 mx-8 mb-20 md:col-span-4 md:grid-cols-4 auto-rows-fr grid-cols-auto">
          {wishlistItems.map((prod) => (
            <WishListCard prod={prod} id={prod.id} key={prod.id} />
          ))}
        </div>
      ) : (
       <div className="flex items-center justify-center h-full ">
        <div className="flex flex-col items-center justify-center overflow-hidden">
        <h1 className="font-bold text-md md:text-lg">YOUR WISHLIST IS EMPTY</h1>
          <img className="w-1/5 h-auto my-4"src={favouriteImage} alt="empty-wishlist"/>
        <p className="my-4 text-sm text-center">Add items that you like to your wishlist. Review them anytime and easily move them to the cart.</p>
        <button onClick={()=>navigate('/products')} className="p-2 border-2 text-secondary-color hover:bg-violet-100 bg-violet-50">CONTINUE SHOPPING</button>
     

        </div>
       </div>
      )}
      <Footer/>
    </div>
  );
};

export default WishList;
