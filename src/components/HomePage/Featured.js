import React, { Component } from "react";

import { ProductContext } from "../../context/context";
import Title from "../Title";
import Product from "../Product";
import { Link } from "react-router-dom";

export class Featured extends Component {
  static contextType = ProductContext;

  render() {
    const { featuredProducts } = this.context;
    return (
      <section className="py-5">
        <div className="container">
          <Title title="featured products" center="true" />
          <div className="row">
            {featuredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <Link to="/products" className="main-link">
                our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Featured;
