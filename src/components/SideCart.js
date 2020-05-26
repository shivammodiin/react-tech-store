import React, { Component } from "react";
import { ProductContext } from "../context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export class SideCart extends Component {
  static contextType = ProductContext;

  render() {
    const { cartOpen, handleCart, cart, cartTotal } = this.context;

    return (
      <CartWrapper show={cartOpen} onClick={handleCart}>
        <ul>
          {cart.map((item) => {
            return (
              <li key={item.id} className="cart-item items-cart mb-4">
                <img
                  width="50"
                  height="50"
                  src={`../${item.image}`}
                  alt="cart item"
                />

                <div className="ml-4">
                  <h6 className="text-uppercase">{item.title}</h6>

                  <h6 className="text-title text-capitalize">
                    amount :{item.count}
                  </h6>
                </div>
              </li>
            );
          })}
        </ul>

        <h4 className="text-capitalize text-center text-main">
          cart total : ${cartTotal}
        </h4>

        <div className="text-center my-5">
          <Link to="/cart" className="main-link">
            cart page
          </Link>
        </div>
      </CartWrapper>
    );
  }
}

export default SideCart;

const CartWrapper = styled.nav`
  position: fixed;
  top: 61px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transition: all 0.4s linear;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 1.5rem;

  ul {
    list-style: none;
    padding: 0 !important;
  }
  .items-cart {
    display: flex;
    margin-right: 0.5rem;
  }
`;
