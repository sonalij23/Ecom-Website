import React from "react";
import banner from "../images/banner.png";
import menClothing from "../images/zara-man.png";
import WomenClothing from "../images/zara-woman.png";
import jewelery from "../images/jewelery.png";
import ProductCarousel from "./ProductCarousel";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="w-full h-[60vh] drop-shadow-xl md:bg-center">
        <img src={banner} className="object-cover w-full h-full" alt="banner" />
      </div>
      <div className="flex flex-wrap items-center mt-24 justify-evenly ">
        <div className="flex flex-col items-center pb-12 border rounded-lg shadow-2xl w-96">
          <h1 className="py-4 text-xl font-semibold text-center">
            New fashion trends for men
          </h1>
          <img className=" w-72 h-96" src={menClothing} alt="men's clothing" />
        </div>

        <div className="flex flex-col items-center pb-12 border rounded-lg shadow-2xl w-96 ">
          <h1 className="py-4 text-xl font-semibold text-center">
            Explore Women's fashion
          </h1>
          <img
            className="w-72 h-96"
            src={WomenClothing}
            alt="women's clothing"
          />
        </div>

        <div className="flex flex-col items-center pb-12 border rounded-lg shadow-2xl w-96">
          <h1 className="py-4 text-xl font-semibold text-center">
            Discover Elegant Jewelry
          </h1>
          <img className="w-72 h-96" src={jewelery} alt="jewelry" />
        </div>
      </div>
      <div>
        <ProductCarousel/>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
