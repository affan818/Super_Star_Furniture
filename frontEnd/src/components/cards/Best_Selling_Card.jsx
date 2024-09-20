import React from "react";
import Best_Sellings_Title from "./Best_Sellings_Title";
import homePageData from "../homepage_api.json";

function Best_Selling_Card() {
  return (
    <>
      <div className="row">
        <Best_Sellings_Title />
        {homePageData.best_selling.map((e, i) => (
          <div key={i} className="col-md-3 lg-12 h-100">
            <div
              className="card h-100 "
              style={{ border: "2px solid #008080" }}
            >
              <img src={e.image} className="card-img-top" alt="Furniture 1 " />
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={{ fontFamily: "Poppins" }}
                >
                  {e.title}
                </h5>
                <p className="text-center">{e.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Best_Selling_Card;
