import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import { Featured } from "../components/HomePage/Featured";

function HomePage() {
  return (
    <>
      <Hero max="true" title="awesome gadgets">
        <Link to="/products" style={{ margin: "2rem" }} className="main-link">
          Our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}

export default HomePage;
