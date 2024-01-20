import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import SearchBar from "./SearchBar";
import { useUserAuth } from "../context/UserAuthContext";
import { CartState } from "../context/Context";

const Header = () => {
  const {
    state: { cart },
  } = CartState();

  const totalQty = cart.reduce((total, item) => total + item.qty, 0);

  console.log(totalQty);
  const navigate = useNavigate();

  const { user, logOut } = useUserAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMobileMenu();
  };
  const handleWishlistClick = () => handleNavigation("/wishlist");
  const handleCartClick = () => handleNavigation("/cart");
  const handleProductsClick = () => handleNavigation("/products");
  const hanndleHomeClick = () => handleNavigation("/");
  const handleLoginClick = () => handleNavigation("/login");
  const handleRegisterClick = () => handleNavigation("/register");

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full h-16 cursor-pointer md:h-auto bg-primary-color md:px-8 md:py-6">
      <div className="text-2xl text-white lg:text-2xl md:text-xl">
        <a className="flex items-center" href="/">
          <RiShoppingBag3Fill className="mx-2 text-4xl" />
          E-com site
        </a>
      </div>
      {user ? (
        <p
          className="py-3 font-semibold  md:hidden border-b-[1px] md:border-b-0 md:px-1 px-3 text-black bg-white rounded-full md:mx-1 md:py-2"
          onClick={handleProductsClick}
        >
          {user.displayName}
        </p>
      ) : (
        <p
          className="py-3 pl-6 md:hidden font-semibold border-b-[1px] md:border-b-0 md:pl-0  md:mx-1 md:py-0"
          onClick={handleLoginClick}
        >
          Login
        </p>
      )}

      <SearchBar />
      <GiHamburgerMenu
        className="mr-3 text-3xl text-white md:hidden"
        onClick={toggleMobileMenu}
      />
      <ul
        className={`absolute right-0 items-center font-semibold md:py-0 justify-evenly w-2/3 md:text-sm lg:text-lg bg-white text-primary-color md:bg-primary-color md:text-white md:w-2/6 top-16 md:static md:flex ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <li
          className="py-3 pl-6 border-b-[1px] md:border-b-0 md:mx-1 md:pl-0 md:py-0 md:hidden"
          onClick={hanndleHomeClick}
        >
          Home
        </li>
        <li
          className="py-3 pl-6 border-b-[1px] md:border-b-0 md:pl-0 md:mx-1 md:py-0"
          onClick={handleProductsClick}
        >
          Products
        </li>
        <li
          className="py-3 pl-6 border-b-[1px] md:pl-0 md:border-b-0 md:mx-1 md:py-0"
          onClick={handleWishlistClick}
        >
          <button className="flex items-center ">
            Wishlist
            <FaHeart className="ml-2" />
          </button>
        </li>

        {user ? (
          <li
            className="py-3 pl-6 hidden md:block border-b-[1px] md:border-b-0 md:px-1 lg:px-3 text-black bg-white rounded-full md:mx-1 md:py-2"
            onClick={handleProductsClick}
          >
            {user.displayName}
          </li>
        ) : (
          <li
            className="py-3 pl-6 hidden md:block border-b-[1px] md:border-b-0 md:pl-0  md:mx-1 md:py-0"
            onClick={handleLoginClick}
          >
            Login
          </li>
        )}

        {user ? (
          <li
            className="py-3  pl-6 md:pl-3 border-b-[1px] md:border-b-0 md:mx-1 md:py-2 lg:px-6 md:px-3 rounded-xl bg-thistle"
            onClick={handleLogOut}
          >
            Logout
          </li>
        ) : (
          <li
            className="py-3  pl-6 border-b-[1px] md:border-b-0 md:pl-0 md:mx-1 md:py-0"
            onClick={handleRegisterClick}
          >
            Register
          </li>
        )}

        <li
          className="py-3 pl-6 text-xl border-b-[1px] md:pl-0 md:border-b-0 md:py-0 md:text-2xl md:mx-3"
          onClick={handleCartClick}
        >
          <button>
            {isMobileMenuOpen ? (
              <span className="flex items-center">
                Cart <FaShoppingCart className="ml-2" />
                {totalQty > 0 && (
                  <span className="px-2 ml-1 text-white bg-red-500 rounded-full">
                    {totalQty}
                  </span>
                )}
              </span>
            ) : (
              <div className="relative">
                <FaShoppingCart />
                {totalQty > 0 && (
                  <span className="absolute px-2 ml-1 text-sm text-white bg-black rounded-full -top-3">
                    {totalQty}
                  </span>
                )}
              </div>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
