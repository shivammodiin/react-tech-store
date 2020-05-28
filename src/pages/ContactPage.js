import React, { Component } from "react";

import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpeg";
import Contact from "../components/ContactPage/Contact";

export class ContactPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Hero img={contactBcg} />
        <Contact />
      </>
    );
  }
}

export default ContactPage;
