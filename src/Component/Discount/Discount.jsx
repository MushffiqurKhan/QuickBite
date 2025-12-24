import React from "react";
import "./Discount.css";

function Discount() {
  return (
    <div className="discount">
      <div className="discount-left">
        <img src="/image/pizza.jfif" alt="Food discount" />
      </div>

      <div className="discount-middle">
        <h1>
          Delicious  Deals Await! 
        </h1>
        <p>
          Grab amazing discounts on top restaurants near you.<br/> Hurry up—these tasty deals won’t last long!
        </p>
      </div>

      <div className="discount-right">
        <h2>$50</h2>
        <span>Discount valid until July 31,0000</span>
      </div>
    </div>
  );
}

export default Discount;
