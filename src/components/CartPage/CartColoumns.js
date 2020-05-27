import React from "react";

function CartColoumns() {
  return (
    <div className="container-fluid text-center my-5 d-none d-lg-block ">
      <div className="row">
        <div className="col-lg-2">
          <div className="text-uppercase">products</div>
        </div>
        <div className="col-lg-2">
          <div className="text-uppercase">name of product</div>
        </div>
        <div className="col-lg-2">
          <div className="text-uppercase">price</div>
        </div>
        <div className="col-lg-2">
          <div className="text-uppercase">quantity</div>
        </div>
        <div className="col-lg-2">
          <div className="text-uppercase">remove</div>
        </div>
        <div className="col-lg-2">
          <div className="text-uppercase">total</div>
        </div>
      </div>
    </div>
  );
}

export default CartColoumns;
