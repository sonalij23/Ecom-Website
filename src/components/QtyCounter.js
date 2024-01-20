import React, { useState } from "react";

const QtyCounter = ({ qty, updateQty, id ,checkout }) => {
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    if (/^\d*$/.test(inputValue) && inputValue <= 10) {
      updateQty(id, inputValue);
      setError("");
    } else {
      setError("Quantity must be less or equal to 10.");
    }
  };
  const handleDecrementChange = () => {
    if (qty > 1) {
      const updatedQty = qty - 1;
      updateQty(id, updatedQty);
    }
  };
  const handleIncrementChange = () => {
    if (qty < 10) {
      const updatedQty = Number(qty) + 1;
      updateQty(id, updatedQty);
    } else {
      setError("Quantity must be less or equal to 10.");
    }
  }; 
  return (
    <div className="flex flex-col ">
      <div className="flex"> 
      <button onClick={handleDecrementChange} className={`px-1  rounded-md hover:bg-violet-100 ${checkout? 'md:text-xs  ':''}`} >-</button>
      <input
        className={`w-4 mx-2 text-xs text-center rounded-sm md:text-base md:w-6 outline outline-1 ${checkout? 'md:text-xs ':''}  `}
        type="text"
        value={qty}
        onChange={(e) => handleInputChange(e)}
      />
    <button className={`px-1 mr-2 rounded-md hover:bg-violet-100 ${checkout? 'md:text-xs  ':''}`}onClick={handleIncrementChange} >+</button>
      </div>
     <div>
     {error && <p className={`text-red-500 text-[6px] md:text-base pt-2 ${checkout? 'md:text-xs ':''}`}>{error}</p>}
     </div>
   
    </div>

  );
};

export default QtyCounter;
