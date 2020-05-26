import React from "react";
import Defaulta from "../images/defaultBcg.jpeg";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
function Default() {
  return (
    <>
      <Hero img={Defaulta} max="true" title="404 Page Not Found">
        <Link to="/" style={{ margin: "2rem" }} className="main-link">
          return to home
        </Link>
      </Hero>
    </>
  );
}

export default Default;
