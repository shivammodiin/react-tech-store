import React from "react";
import Title from "../Title";
import CartColoumns from "./CartColoumns";
import CartItem from "./CartItem";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

function Cart() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="your cart items" center />
      </div>
      <CartColoumns />
      <CartList />
      <CartTotal />
    </section>
  );
}

export default Cart;
