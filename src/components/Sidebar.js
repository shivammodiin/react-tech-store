import React, { Component } from "react";
import { ProductContext } from "../context/context";
import { Link } from "react-router-dom";
import styled from "styled-components";

export class Sidebar extends Component {
  static contextType = ProductContext;

  render() {
    const { links, sidebarOpen, handleSidebar } = this.context;

    return (
      <SidebarWrapper show={sidebarOpen}>
        <div className="sidebar-toggle">
          <ul>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    className="sidebar-Link"
                    onClick={handleSidebar}
                    to={link.path}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </SidebarWrapper>
    );
  }
}

const SidebarWrapper = styled.nav`
  .sidebar-toggle {
    position: fixed;
    top: 61px;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--mainGrey);
    z-index: 1;
    border-right: 4px solid var(--primaryColor);
    transition: all 0.4s linear;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(-100%)"};
  }
  .sidebar-toggle ul {
    list-style: none;
    padding: 0 !important;
  }
  .sidebar-Link {
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    display: block;
    background: transparent;
    transition: var(--mainTransition);
  }

  .sidebar-Link:hover {
    text-decoration: none !important;
    color: var(--mainWhite);
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  }

  @media (min-width: 576px) {
    .sidebar-toggle {
      width: 20rem;
    }
  }
`;

export default Sidebar;
