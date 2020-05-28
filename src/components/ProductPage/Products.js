import React, { Component } from "react";
import { ProductContext } from "../../context/context";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";
import Loading from "../Loading";

export class Products extends Component {
  static contextType = ProductContext;
  render() {
    const { filteredProducts, storeProducts } = this.context;

    if (storeProducts.length === 0) {
      return <Loading />;
    }
    return (
      <section className="py-5">
        <div className="container">
          <Title center title="Our Products" />
          <ProductFilter />
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="text-title">
                total products : {filteredProducts.length}
              </div>
            </div>
          </div>
          <div className="row py-5">
            {filteredProducts.length === 0 ? (
              <div className="col text-title text-center">
                sorry, No Items matched from your search
              </div>
            ) : (
              filteredProducts.map((product) => {
                return <Product key={product.id} product={product} />;
              })
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
