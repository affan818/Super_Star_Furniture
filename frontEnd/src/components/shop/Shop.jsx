import React from "react";
import "./shop.css";

const Shop = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 style={{ fontFamily: "Poppins" }}>Mery Lounge Chair</h1>
            <span>
              <span className="me-4">$149.99</span>
              <span>
                <img
                  style={{ width: "100px" }}
                  src="https://static.vecteezy.com/system/resources/previews/009/664/666/non_2x/5-star-rating-review-star-transparent-free-png.png"
                  alt=""
                />
                4.6/5.0
              </span>
            </span>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae
              dolorum maxime, dignissimos ratione ducimus quas laborum aliquam
              alias possimus modi ipsa delectus quis suscipit.
            </p>
          </div>
          <div className="col">
            <img
              className="float-end flip-image"
              style={{ width: "300px" }}
              src="https://static1.squarespace.com/static/6228b3c5ffb1bc59ba6f4e04/626d0e1cb4c1367b5b549159/6270f1fdd47f98168f0986fa/1694787595799/rimo-armchaircoloured-steel-main1%402x.png?format=1500w"
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
