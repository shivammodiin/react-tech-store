import React, { Component } from "react";
import { ProductContext } from "../../context/context";
import Title from "../Title";
import Product from "../Product";

export class Products extends Component {
  static contextType = ProductContext;
  render() {
    const { filteredProducts } = this.context;
    return (
      <section className="py-5">
        <div className="container">
          <Title center title="Our Products" />
          <div className="row py-5">
            {filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
