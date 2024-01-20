import './App.css';
import {BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Home from "./components/Home"
import Cart from './components/Cart';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import WishList from './components/WishList';
import SingleProductPage from './components/SingleProductPage';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoutes from './components/ProtectedRoutes';
import CheckoutPage from './components/CheckoutPage';
import StripeCheckoutPage from './components/StripeCheckout';
import ThankyouPage from './components/ThankyouPage';



function App() {
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/products" element = {<ProductPage/>}/>
        <Route path = "/wishlist" element = {<WishList/>}/>
        <Route path = "/product-details" element={<SingleProductPage/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path = "/checkout" element={<ProtectedRoutes><CheckoutPage/></ProtectedRoutes>}/>
        <Route path = "/payment" element={<ProtectedRoutes><StripeCheckoutPage/></ProtectedRoutes>}/>
        <Route path = "/order-placed" element={<ProtectedRoutes><ThankyouPage/></ProtectedRoutes>}/>

      </Routes>
    </Router>
  );
}

export default App;
