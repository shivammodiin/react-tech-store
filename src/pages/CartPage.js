import React, { Component } from "react";

import Cart from "../components/CartPage/Cart";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";

export class CartPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Hero img={cartBcg} />
        <Cart history={this.props.history} />
      </>
    );
  }
}

export default CartPage;
