import React, { Component } from "react";

import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";
import Info from "../components/AboutPage/Info";

export class AboutPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Hero img={aboutBcg}>
          <h1>Hello From About Page</h1>
        </Hero>
        <Info />
      </>
    );
  }
}

export default AboutPage;
