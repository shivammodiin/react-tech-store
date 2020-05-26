import React from "react";
import Title from "../Title";

import aboutBcg from "../../images/aboutBcg.jpeg";
function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-3 col-md-6">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="About company"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto my-3 col-md-6">
            <Title title="about us" center="true" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus dignissimos minima cum quibusdam qui nihil blanditiis
              eos placeat possimus id? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ullam corporis natus illum hic molestiae, ex
              omnis quibusdam rem, fugiat nihil blanditiis nemo perspiciatis,
              quisquam minus?
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
