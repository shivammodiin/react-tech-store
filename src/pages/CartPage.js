import React from "react";
import Cart from "../components/CartPage/Cart";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";

function CartPage() {
  return (
    <>
      <Hero img={cartBcg} />
      <Cart />
    </>
  );
}

export default CartPage;
