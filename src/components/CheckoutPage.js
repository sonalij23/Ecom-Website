import React from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutSidebar from "./CheckoutSidebar";

const CheckoutPage = () => {
  return (
    <div className="flex flex-col w-full mt-24 sm:flex-row">
      <CheckoutForm />
      <CheckoutSidebar />
    </div>
  );
};

export default CheckoutPage;
