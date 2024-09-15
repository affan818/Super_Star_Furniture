import React from "react";
import homePageData from "../homepage_api.json";
import Best_Sellings_Title from "../cards/Best_Sellings_Products";

import Products from "../products/Products";
import Best_Selling_Card from "../cards/Best_Selling_Card";

function Home() {
  return (
    <>
      <div
        className="container col-lg-12 col-sm-3"
        style={{ color: "#4E342E" }}
      >
        {/* hero section */}
        <div
          className=" p-5 rounded-4"
          style={{ backgroundColor: "#C1B7A2", color: "#4E342E" }}
        >
          <div className="row align-items-center">
            {/*text section */}
            <div className="col-md-6 col-12 mb-4 text-center text-md-left">
              <h1
                className="mb-4"
                style={{ fontSize: "40px", fontFamily: "Poppins" }}
              >
                Buy Awesome Furniture!
              </h1>
              <div
                className="d-flex
              flex-column flex-md-row justify-content-center justify-content-md-center align-items-center mb-4"
              >
                <div className="text-center ">
                  <h4>{homePageData.banner.no_of_furnitures}+</h4>
                  <h6 style={{ fontFamily: "Poppins" }}>Furnitures</h6>
                </div>

                {/*Vertical Lines */}
                <div
                  className="vr mx-3 d-none d-md-block"
                  style={{ height: "60px", borderLeft: "2px solid black" }}
                ></div>

                <div className="text-center">
                  <h4>{homePageData.banner.no_of_customers}+</h4>
                  <h6 style={{ fontFamily: "Poppins" }}>Customers</h6>
                </div>
              </div>
              {/* start section */}

              {/*Button */}
              <div className="text-center">
                <button
                  className="btn"
                  style={{
                    width: "100",
                    height: "50px",
                    fontFamily: "Poppins",
                    padding: "10px",
                    margin: "auto",
                    backgroundColor: "#008080",
                    color: "#fff",
                  }}
                >
                  Shop Now
                </button>
              </div>
            </div>
            {/* image section */}
            <div className="col-md-6 col-12 text-center">
              <img
                src="https://edgelivingfurniture.com.au/assets/img/products/_500x500_fit_center-center_75_none/N190-Nordal-2.5s-C118-911_IMG00738.webp"
                alt="sofa"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
        {/*card */}
        <div className="row">
          <Best_Sellings_Title />
          {homePageData.best_selling.map((e, index) => (
            <Best_Selling_Card
              key={index}
              img={e.image}
              title={e.title}
              price={e.price}
            />
          ))}
        </div>
        <Products />
      </div>
    </>
  );
}

export default Home;
