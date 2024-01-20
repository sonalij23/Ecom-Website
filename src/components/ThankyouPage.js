import React from "react";
import order from "../images/order-placed.jpg";
import { useNavigate } from "react-router-dom";


const ThankyouPage = () => {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="my-10 text-4xl font-semibold text-secondary-color">Thank you for your order!</h1>
      <img src={order} alt="orderplaced" className="object-cover w-80 h-80" />
      <button onClick={()=>navigate('/')} className="p-4 my-5 font-semibold text-white rounded-lg bg-primary-color">Return to Home</button>
    </div>
  );
};

export default ThankyouPage;
