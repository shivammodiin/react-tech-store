import React from "react";
import { socialIcons } from "../context/socialData";

function Footer() {
  return (
    <div className="footermain">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <p className="text-capitalize">
              copyright &copy;{" "}
              <a
                className="mywebsite"
                target="_blank"
                rel="noopener noreferrer"
                href="https://shivamodi.com"
              >
                shivamodi.com
              </a>
              {"   "}
              {new Date().getFullYear()}. all rights reserved
            </p>
          </div>
          <div className="col-md-6 social-icons d-flex justify-content-around">
            {socialIcons.map((item) => (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={item.url}
                key={item.id}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
