import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./shop.css";

const initialVal = 1;

const Shop = () => {
  const [count, setCount] = useState(initialVal);
  const [activeColor, setActiveColor] = useState(null);
  const increement = (value) => setCount(count + value);
  const decreement = (value) => {
    if (count !== initialVal) {
      setCount(count - value);
    }
  };

  const onColorChange = (divId) => {
    setActiveColor(divId);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: "#4E342E", marginBottom: "40px" }}
      >
        <div
          className="p-5 rounded-4"
          style={{
            backgroundColor: "#C1B7A2",
            color: "#4E342E",
          }}
        >
          {/* details section */}
          <div className="row align-items-center">
            {/* text section */}
            <div className="col-md-6 col-12 mb-4">
              <h1
                className="mb-4"
                style={{ fontSize: "40px", fontFamily: "Poppins" }}
              >
                Mery Lounge Chair
              </h1>
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                quae dolorum maxime, dignissimos ratione ducimus quas laborum
                aliquam alias possimus modi ipsa delectus quis suscipit.
              </p>
              <div
                className="d-flex"
                style={{ gap: "1rem", paddingBottom: "1rem" }}
              >
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    onClick={() => onColorChange(index + 1)}
                    style={{
                      backgroundColor: [
                        "#827878",
                        "#5e5e05",
                        "#8680c2",
                        "#612f6b",
                      ][index],
                      width: "20px",
                      height: "20px",
                      border:
                        activeColor === index + 1
                          ? `3px solid #eddfe2`
                          : "none",
                      boxShadow:
                        activeColor === index + 1
                          ? "0px 4px 6px rgba(0, 0, 0, 0.3)"
                          : "none",
                    }}
                    className="rounded-circle"
                  ></div>
                ))}
              </div>

              <div className="d-flex" style={{ gap: "3rem" }}>
                <div
                  className="d-flex align-items-center justify-content-evenly"
                  style={{
                    width: "25%",
                    height: "50px",
                    fontFamily: "Poppins",
                    border: "1px solid #008080",
                    borderRadius: "8px",
                    fontSize: "1.25rem",
                  }}
                >
                  <span className="fw-bold" onClick={() => decreement(1)}>
                    <FaMinus />
                  </span>
                  <span className="fw-bold">{count}</span>
                  <span className="fw-bold" onClick={() => increement(1)}>
                    <FaPlus />
                  </span>
                </div>

                <div
                  className="btn d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#008080",
                    color: "#fff",
                    width: "25%", // Same width for consistency
                    height: "50px", // Set a fixed height for both elements
                    fontFamily: "Poppins",
                    fontSize: "1.25rem", // Increased text size
                  }}
                >
                  <span>Add to cart</span>
                </div>
              </div>
            </div>

            {/* image section */}
            <div className="col-md-6 col-12">
              <img
                className="float-end flip-image"
                style={{ width: "300px", transform: "scaleX(-1)" }} // Flip the image horizontally
                src="https://static1.squarespace.com/static/6228b3c5ffb1bc59ba6f4e04/626d0e1cb4c1367b5b549159/6270f1fdd47f98168f0986fa/1694787595799/rimo-armchaircoloured-steel-main1%402x.png?format=1500w"
                alt="Mery Lounge Chair"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
