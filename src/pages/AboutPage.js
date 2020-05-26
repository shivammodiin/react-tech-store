import React from "react";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";
import Info from "../components/AboutPage/Info";

function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg}>
        <h1>Hello From About Page</h1>
      </Hero>
      <Info />
    </>
  );
}

export default AboutPage;
