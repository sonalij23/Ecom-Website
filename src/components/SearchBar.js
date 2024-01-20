import React from "react";
import { FaSearch } from "react-icons/fa";
import { CartState } from "../context/Context";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {

  const navigate = useNavigate();

  const { products, searchQuery, setSearchQuery, setSearchProducts } =
    CartState();

  const handleSearchInput = (e) => {
    let inputValue = e.target.value;
    let query;
    if (
      inputValue !== null &&
      inputValue !== undefined
    ) {
      query = inputValue.toLowerCase();
      setSearchQuery(query);
    }

    const filtered = products.filter((prod) =>
      prod.title.toLowerCase().includes(searchQuery)
    );

    setSearchProducts(query ? filtered : products);
  };

  const handleKeyPress = (e)=>{
    if(e.key === 'Enter'){
      navigate("/products")
    }
  }

  return (
    <div className="hidden w-1/4 py-2 pl-2 pr-6 bg-white rounded-lg lg:w-1/3 md:flex ">
      
      <input
        className="w-full focus:outline-none"
        value={searchQuery}
        type="text"
        placeholder="search for products"
        onChange={(e) => handleSearchInput(e)}
        onKeyDown={(e)=>handleKeyPress(e)}
      />
      <FaSearch className="mx-2 my-1 text-lg" onClick={()=>navigate("/products")} />
    </div>
  );
};

export default SearchBar;
