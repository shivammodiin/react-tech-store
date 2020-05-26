import React from "react";
import styled from "styled-components";
import mainBcg from "../images/mainBcg.jpeg";

function Hero({ img, max, children, title }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  min-height: ${(props) => (props.max ? "100vh" : "60vh")};
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${(props) => props.img}) center/cover no-repeat;
  background-attachment: fixed;
  @media (max-width: 767px) {
    background-position: center;
  }
  .title {
    font-size: 3.5rem;
    color: white;
    padding-top: 2rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.25);
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
`;

Hero.defaultProps = {
  img: mainBcg,
};

export default Hero;
