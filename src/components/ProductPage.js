import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import Footer from "./Footer";


const ProductPage = () => {
  const { products, error, searchProducts } = CartState();

  const [displayedProducts, setDisplayedProducts] = useState([]);
  useEffect(() => {
    setDisplayedProducts(
      searchProducts.length > 0 ? searchProducts : products
    );
  }, [searchProducts, products]);

  
  return (
    <div className="">
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className="grid items-start flex-1 grid-cols-3 gap-5 mt-20 mr-4 md:grid-cols-4 md:mt-24" >
          <div className="sticky left-0 top-24 ">
            <Filter 
              displayedProducts={displayedProducts}
              setDisplayedProducts={setDisplayedProducts}
            />
          </div>
          <div className="grid col-span-2 gap-5 ml-2 md:col-span-3 md:grid-cols-3 auto-rows-fr grid-cols-auto">
            {displayedProducts ? (
              displayedProducts.map((item) => {
                return <div key={item.id}><ProductCard prod={item} id={item.id} /></div>;
              })
            ) : (
              <div>
                <h1>Loading...</h1>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer/>
  
    </div>
  );
};

export default ProductPage;
