import React, { Component } from "react";
import { ProductContext } from "../../context/context";

class ProductFilter extends Component {
  static contextType = ProductContext;

  getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  render() {
    const {
      price,
      search,
      max,
      min,
      company,
      shipping,
      storeProducts,
      handleChange,
    } = this.context;

    let types = this.getUnique(storeProducts, "company");
    types = ["all", ...types];

    types = types.map((item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    });

    return (
      <section className="filter-container">
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="search">product price ${price}</label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search here...."
              value={search}
              onChange={(e) => handleChange(e)}
              className="form-control input-search"
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Company</label>
            <select
              name="company"
              id="company"
              value={company}
              className="form-control"
              onChange={(e) => handleChange(e)}
            >
              {types}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price">product price ${price}</label>
            <input
              type="range"
              name="price"
              min={min}
              max={max}
              id="price"
              value={price}
              onChange={(e) => handleChange(e)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                checked={shipping}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="shipping">Free Shipping</label>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default ProductFilter;
