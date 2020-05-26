import React from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
import productimg from "../images/productsBcg.jpeg";
import Products from "../components/ProductPage/Products";

function ProductsPage() {
  return (
    <>
      <Hero img={productimg} alt="Products Images" />
      <Products />
    </>
  );
}

export default ProductsPage;
