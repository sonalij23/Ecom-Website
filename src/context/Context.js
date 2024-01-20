import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import cartReducer from "./Reducer";

const CartContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const [category, setCategory] = useState("all")


  

  useEffect(() => {

    const api = axios.create({
      baseURL: "https://fakestoreapi.com",
    });
    const fetchData = async () => {
      try {

        let apiUrl ="/products";

        if(category !== "all"){
          
          apiUrl += `/category/${category}`

        }
        const res = await api.get(apiUrl);

        
        setProducts(res.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [category]);

  const initialState = {
    cart: [],
    wishlistItems: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
   
  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        products,
        error,
        searchQuery,
        setSearchQuery,
        searchProducts,
        setSearchProducts,
        setCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(CartContext);
};
