import React, { Component } from "react";

import Hero from "../components/Hero";
import Title from "../components/Title";
import { ProductContext } from "../context/context";
import SingleProductImg from "../images/singleProductBcg.jpeg";
import { Link } from "react-router-dom";

export class SingleProductPage extends Component {
  static contextType = ProductContext;

  state = {
    id: this.props.match.params.id,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let { id } = this.state;
    const { getSingleProduct, addToCart } = this.context;
    let product = getSingleProduct(id);
    product = { ...product };
    const { company, image, description, price, title } = product;
    if (!product) {
      return "Loading";
    }
    console.log(id);
    return (
      <>
        <Hero img={SingleProductImg} title="Single Product Page" />
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto my-3 col-sm-8 col-md-6">
                <img src={image} alt={`product ${title}`} />
              </div>
              <div className="col-10 mx-auto my-3 col-sm-8 col-md-6">
                <h5 className="text-title mb-4">model :{title}</h5>
                <h5 className="text-capitalize text-muted mb-4">
                  company :{company}
                </h5>
                <h5 className="text-main text-capitalize mb-4">
                  price :${price}
                </h5>
                <p className="text-capitalize text-title mt-3">
                  some info about product :
                </p>

                <p>{description}</p>

                <button
                  type="button"
                  className="main-link"
                  style={{ margin: "0.75rem" }}
                  onClick={() => addToCart(id)}
                >
                  add to cart
                </button>
                <Link
                  to="/products"
                  className="main-link"
                  style={{ margin: "0.75rem" }}
                >
                  back to products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SingleProductPage;
