import React, { Component } from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from "react-icons/fa";

export class CartItem extends Component {
  render() {
    const { CartItem, increment, decrement, removeItem } = this.props;

    const { id, title, price, count, total, image } = CartItem;

    return (
      <div className="row mt-5 mt-lg-0 icon-cart text-capitalize text-center align-items-center">
        <div className="col-10 col-lg-2 mx-auto pb-2">
          <img
            src={image}
            alt="product"
            width="80"
            className="img-fluid"
            alt="Product"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <span className="d-lg-none">product : </span>
          {title}
        </div>

        <div className="col-10 mx-auto col-lg-2 pb-2">
          <span className="d-lg-none">price : </span> $ {price}
        </div>

        <div className="col-10 mx-auto col-lg-2 pb-2">
          <div className="d-flex justify-content-center ">
            <FaChevronCircleDown
              onClick={() => decrement(id)}
              className="cart-icon text-primary"
            />
            <span
              className="text-title text-muted  mx-3"
              style={{ margin: "-3px auto" }}
            >
              {count}
            </span>
            <FaChevronCircleUp
              onClick={() => increment(id)}
              className="cart-icon  text-primary"
            />
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2 pb-2">
          <FaTrash
            onClick={() => removeItem(id)}
            className="cart-icon text-danger"
          />
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <strong className="text-muted">item total : ${total}</strong>
        </div>
      </div>
    );
  }
}

export default CartItem;
