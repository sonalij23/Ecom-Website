import React from "react";
import { useNavigate,useLocation } from "react-router-dom";

import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onToken = (token) => {
    console.log(token);
    navigate("/order-placed");
  };

  const total = location.state && location.state.total;

  return (
    <div className="mt-32 text-center ">
        <div >
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51OaDg2SEz1pw5fwzkwLthe99O0iZnB3CY7aukNpc390UU7PSbZOTYUEyCURU0nSj8yrvOWsEi3j9nKKVWRpGuhen00GcLMCFqI"
        amount={(Number(total)+20 )* 100}
      />
      </div>
    </div>
  );
};

export default StripeCheckoutPage;
