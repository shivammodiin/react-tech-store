import React, { Component } from "react";

import Hero from "../components/Hero";
import Title from "../components/Title";
import productimg from "../images/productsBcg.jpeg";
import Products from "../components/ProductPage/Products";

class ProductsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Hero img={productimg} alt="Products Images" />
        <Products />
      </>
    );
  }
}

export default ProductsPage;
