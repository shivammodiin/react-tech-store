import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductContext } from "../context/context";

export class Product extends Component {
  static contextType = ProductContext;

  render() {
    const product = this.props.product;
    const { addToCart, setSingleProduct } = this.context;

    return (
      <div className="col-10 col-md-4 col-sm-8 product mx-auto my-3 mt-5">
        <div className="card">
          <div className="img-container">
            <img
              src={product.image}
              className="card-image-top img-fluid p-5"
              alt="product"
            />
            <div className="product-icon">
              <Link
                to={`/products/${product.id}`}
                onClick={() => setSingleProduct(product.id)}
              >
                <FaSearch className="icon" />
              </Link>
              <FaCartPlus
                className="icon"
                onClick={() => addToCart(product.id)}
              />
            </div>
          </div>
          <div className="card-body d-flex justify-content-between">
            <p className="mb-0">{product.title}</p>
            <p className="mb-0 text-main">${product.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
