import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Best_Sellings_Products() {
  return (
    <>
      <div className="row mt-4 mb-4">
        <div className="col-md-3 col-sm-12 col-lg-3 ">
          <div className="left_text  text-center">
            <h1 style={{ fontFamily: "Poppins" }}>Best Selling Furnitures</h1>
            <p style={{ fontFamily: "Poppins" }}>
              Get the best deals on the best selling furnitures
            </p>
            <button
              className="btn"
              style={{
                backgroundColor: "#008080",
                color: "#fff",
                textAlign: "center",
                fontSize: "20px",
                width: "100%",
                fontFamily: "Poppins",
              }}
            >
              See more{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Best_Sellings_Products;
