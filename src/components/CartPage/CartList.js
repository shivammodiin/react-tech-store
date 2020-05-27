import React, { Component } from "react";
import { ProductContext } from "../../context/context";
import CartItem from "./CartItem";
import Title from "../Title";

export class CartList extends Component {
  static contextType = ProductContext;

  render() {
    const { cart, increment, decrement, clearCart, removeItem } = this.context;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            {cart.length === 0 ? (
              <h1 className="text-title text-center my-4">
                Your Cart is Currently Empty
              </h1>
            ) : (
              cart.map((item) => {
                return (
                 
                    <CartItem
                      key={item.id}
                      increment={increment}
                      decrement={decrement}
                      removeItem={removeItem}
                      clearCart={clearCart}
                      CartItem={item}
                    />
                  
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CartList;
