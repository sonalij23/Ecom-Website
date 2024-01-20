import React, {  useState } from "react";
import { CartState } from "../context/Context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import "../styles/custom-radio.css";
const Filter = ({ displayedProducts, setDisplayedProducts }) => {
  const { setCategory, products } = CartState();
  const [selectedSorting, setSelectedSorting] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [ratingNum, setRatingNum] = useState(0);






  // price low to high function
  const handleAscendingSort = () => {
    const sortedProducts = [...displayedProducts].sort(
      (a, b) => a.price - b.price
    );

    setDisplayedProducts(sortedProducts);
    setSelectedSorting("ascending");
  };

  // price high to low function
  const handleDescendingSort = () => {
    const sortedProducts = [...displayedProducts].sort(
      (a, b) => b.price - a.price
    );

    setDisplayedProducts(sortedProducts);
    setSelectedSorting("descending");
  };

  //category change function
  const handleCategoryChange = (e) => {
    let categoryType = e.target.value;

    setCategory(categoryType);
    setSelectedCategory(categoryType);
  };

  //Rating Products

  const handleRatingProducts = (i) => {
    setRatingNum(i + 1);

    const sortedProducts = products.filter((item) => item.rating.rate >= i + 1);

    setDisplayedProducts(sortedProducts);
  };

  // clear filter function
  const handleClearFilter = () => {
    setDisplayedProducts(products);
    setCategory("all");
    setSelectedSorting(null);
    setSelectedCategory(null);
    setRatingNum(0);
  };

  return (
    <div className="w-full h-full pb-6 pr-1 border rounded-lg top-23 border-l-violet-300 bg-thistle">
      <div className="flex flex-col ml-2 sm:ml-4 text-[10px] md:text-lg pt-16">
        <h1 className="mb-6 text-lg font-bold md:text-3xl">Filter</h1>

        {/* Price sort section */}
        <div>
          <h1 className="mb-3 font-bold ">Price</h1>
        </div>
        <div className="flex items-center mt-3">
          <input
            className="mr-1 md:mr-4 "
            type="radio"
            name="sorting"
            id="ascending"
            onChange={handleAscendingSort}
            checked={selectedSorting === "ascending"}
          />
          <label htmlFor="ascending"> Low to High</label>
        </div>
        <div className="flex items-center mt-3">
          <input
            className="mr-1 md:mr-4"
            type="radio"
            name="sorting"
            id="descending"
            onChange={handleDescendingSort}
            checked={selectedSorting === "descending"}
          />
          <label htmlFor="descending"> High to Low</label>
        </div>

        {/* Rating Section */}
        <div>
          <h1 className="mt-6 mb-3 font-bold">Rating</h1>
          <div className="flex ">
            {[...Array(4)].map((_, i) => (
              <span className="mx-1 text-sm md:text-2xl" key={i} onClick={() => handleRatingProducts(i)}>
                {ratingNum > i ? <AiFillStar /> : <AiOutlineStar />}
              </span>
            ))}
          </div>
        </div>

        {/* category section */}
        <div className="flex flex-col ">
          <h1 className="mt-6 mb-3 font-bold ">Category</h1>
          <div className="flex items-center mt-3 ">
            <input
              className="mr-1 md:mr-4"
              type="radio"
              value={`men's clothing`}
              name="category"
              id="men"
              onChange={(e) => handleCategoryChange(e)}
              checked={selectedCategory === "men's clothing"}
            />
            <label htmlFor="men">Men's clothing</label>
          </div>
          <div className="flex items-center mt-3">
            <input
              className="mr-1 md:mr-4"
              type="radio"
              value={`women's clothing`}
              name="category"
              id="women"
              onChange={(e) => handleCategoryChange(e)}
              checked={selectedCategory === "women's clothing"}
            />
            <label htmlFor="women">Women's clothing</label>
          </div>
          <div className="flex items-center mt-3">
            <input
              className="mr-1 md:mr-4"
              type="radio"
              value={`jewelery`}
              name="category"
              id="jewelery"
              onChange={(e) => handleCategoryChange(e)}
              checked={selectedCategory === "jewelery"}
            />
            <label htmlFor="jewelery">Jewelery</label>
          </div>
          <div className="flex items-center mt-3">
            <input
              className="mr-1 md:mr-4"
              type="radio"
              value={`electronics`}
              name="category"
              id="electronics"
              onChange={(e) => handleCategoryChange(e)}
              checked={selectedCategory === "electronics"}
            />
            <label htmlFor="electronics">Electronics</label>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          className="w-full py-1 mt-8 text-sm text-white border rounded-lg md:w-auto md:text-base md:px-4 md:py-2 bg-primary-color"
          onClick={handleClearFilter}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
