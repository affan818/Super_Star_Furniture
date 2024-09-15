import React from "react";

function Best_Selling_Card({ img, title, price }) {
  return (
    <>
      <div className="col-md-3 lg-12 h-100">
        <div className="card h-100 " style={{ border: "2px solid #008080" }}>
          <img src={img} className="card-img-top" alt="Furniture 1 " />
          <div className="card-body">
            <h5
              className="card-title text-center"
              style={{ fontFamily: "Poppins" }}
            >
              {title}
            </h5>
            <p className="text-center">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Best_Selling_Card;
