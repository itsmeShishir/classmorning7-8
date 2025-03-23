import React from "react";
import {Routes, Route} from "react-router-dom";
import AllCategoryPage from "./pages/Frontend/AllCategoryPage";
export default function App() {
  return (
   <>
   <Routes>
    <Route path="/" element = {<h1>Home Page</h1>}/>
    <Route path="about" element = {<h1>About Page</h1>}/>
    <Route path="contact" element = {<h1>Contact Page</h1>}/>
    <Route path="category" element = { <AllCategoryPage/> }/>
    <Route path="login" element = {<h1>Login Page</h1>}/>
    <Route path="register" element = {<h1>Register Page</h1>}/>
    <Route path="products" element = {<h1>Product Page</h1>}/>
    <Route path="single-product" element = {<h1>Single Product Page</h1>}/>
    <Route path="cart" element = {<h1>Cart Page</h1>}/>
    <Route path="checkout" element = {<h1>Checkout Page</h1>}/>
    <Route path="payment" element = {<h1>Payment Page</h1>}/>
    <Route path="order" element = {<h1>Order Page</h1>}/>
    <Route path="order-success" element = {<h1>Order Success Page</h1>}/>
    <Route path="order-failed" element = {<h1>Order Failed Page</h1>}/>
   </Routes>
   </>
  );
};