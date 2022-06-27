import React from "react";
import data from "./data";

const Product = () => {
  var image = "url(images/model-3.jpg)";
  var name = "Model 3";
  return data.map((item) => {
    return (
      <section key={item.id} style={{ backgroundImage: item.image }}>
        <div className="content">
          <h1>{item.name}</h1>
          <p>
            Order Online for <a href="">Touchless Delivery</a>
          </p>
          <div className="buttons">
            <a href="">custom order</a>
            <a href="">existing Inventory</a>
          </div>
        </div>
      </section>
    );
  });
};

export default Product;
