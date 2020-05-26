import React from "react";
import { serviceData } from "./seviceData";
import Title from "../Title";

function Services() {
  return (
    <div className="service-main bg-primary text-white py-5">
      <div className="container">
        <Title title="Services" center="true" />

        <div className="row" style={{ margin: "25px" }}>
          {serviceData.map((item) => {
            return (
              <div
                key={item.id}
                className="col-md-4 col-10 col-sm-6  mx-auto my-3"
              >
                <div className="service-icon text-center">{item.icon}</div>
                <div className="sevice-title text-center mt-2">
                  {item.Title}
                </div>
                <div className="service-text text-lead mt-3">{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
