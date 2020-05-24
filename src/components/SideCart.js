import React, { Component } from "react";
import { ProductContext } from "../context/context";
import { Link } from "react-router-dom";
import styled from "styled-components";

export class SideCart extends Component {
  static contextType = ProductContext;

  render() {
    const { Links, cartOpen, handleCart } = this.context;

    return (
      <CartWrapper show={cartOpen} onClick={handleCart}>
        <h4>Side CArt</h4>
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
`;
