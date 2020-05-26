import React from "react";
import logo from "../images/logo.svg";

import { FaBars, FaCartPlus } from "react-icons/fa";
import { ProductContext } from "../context/context";
import { Component } from "react";
export default class Navbar extends Component {
  static contextType = ProductContext;
  render() {
    const { cartItems, handleSidebar, handleCart } = this.context;

    return (
      <div className="nav-center">
        <FaBars className="nav-icon" onClick={handleSidebar} />
        <img src={logo} alt="tech store logo" />
        <div className="nav-cart">
          <FaCartPlus className="nav-icon" onClick={handleCart}></FaCartPlus>
          <div className="cart-items">{cartItems}</div>
        </div>
      </div>
    );
  }
}
