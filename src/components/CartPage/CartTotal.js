import React, { Component } from "react";
import { ProductContext } from "../../context/context";
import { Link } from "react-router-dom";

export class CartTotal extends Component {
  static contextType = ProductContext;

  render() {
    const { cartSubTotal, cart, cartTax, clearCart, cartTotal } = this.context;

    return (
      <div className="col text-title text-center my-4">
        {cart.length === 0 ? (
          <Link to="/products">
            <button
              className="btn btn-outline-success text-capitalize my-4"
              onClick={clearCart}
            >
              Our Products
            </button>
          </Link>
        ) : (
          <button
            className="btn btn-outline-danger text-capitalize my-4"
            onClick={clearCart}
          >
            clear cart
          </button>
        )}
        <h3>subtotal : ${cartSubTotal}</h3>
        <h3>tax : ${cartTax}</h3>
        <h3>total : ${cartTotal}</h3>
      </div>
    );
  }
}

export default CartTotal;
