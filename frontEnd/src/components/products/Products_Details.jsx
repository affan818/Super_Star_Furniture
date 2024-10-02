import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const initialVal = 1;

const Products_Details = () => {
  const { state } = useLocation();
  const { productData } = state;
  const [count, setCount] = useState(initialVal);
  const [activeColor, setActiveColor] = useState(null);
  const increement = () => {
    setCount((prev) => prev + 1);
  };
  const decreement = () => {
    if (count !== initialVal) {
      setCount((prev) => prev - 1);
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
                {productData.title}
              </h1>
              <span>
                <span className="me-4">{productData.price}</span>
                <span>
                  <img
                    style={{ width: "100px" }}
                    src="https://static.vecteezy.com/system/resources/previews/009/664/666/non_2x/5-star-rating-review-star-transparent-free-png.png"
                    alt=""
                  />
                  4.6/5.0
                </span>
              </span>
              <p>{productData.desc}</p>
              <div
                className="d-flex"
                style={{ gap: "1rem", paddingBottom: "1rem" }}
              >
                <div
                  onClick={() => onColorChange(1)}
                  style={{
                    backgroundColor: "#827878",
                    width: "20px",
                    height: "20px",
                    border: activeColor == 1 ? "3px solid #eddfe2" : "none",
                    boxShadow:
                      activeColor === 1
                        ? "0px 4px 6px rgba(0, 0, 0, 0.3)"
                        : "none",
                  }}
                  className="rounded-circle"
                ></div>
                <div
                  onClick={() => onColorChange(2)}
                  style={{
                    backgroundColor: "#5e5e05",
                    width: "20px",
                    height: "20px",
                    border: activeColor == 2 ? "3px solid #eddfe2" : "none",
                    boxShadow:
                      activeColor == 2 ? "0px 4px 6px rgba(0,0,0,0.3)" : "none",
                  }}
                  className="rounded-circle"
                ></div>
                <div
                  onClick={() => onColorChange(3)}
                  style={{
                    backgroundColor: "#8680c2",
                    width: "20px",
                    height: "20px",
                    border: activeColor == 3 ? "3px solid #eddfe2" : "none",
                    boxShadow:
                      activeColor == 3 ? "0px,4px,6px rgba(0,0,0,0.3)" : "none",
                  }}
                  className="rounded-circle"
                ></div>
                <div
                  onClick={() => onColorChange(4)}
                  style={{
                    backgroundColor: "#612f6b",
                    width: "20px",
                    height: "20px",
                    border: activeColor == 4 ? "3px solid #eddfe2" : "none",
                    boxShadow:
                      activeColor == 4 ? "0px 4px 6px rgba(0,0,0,0.3)" : "none",
                  }}
                  className="rounded-circle"
                ></div>
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
                  <span className="fw-bold" onClick={decreement}>
                    <FaMinus />
                  </span>
                  <span className="fw-bold">{count}</span>
                  <span className="fw-bold" onClick={increement}>
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
                className="float-end"
                style={{ width: "300px" }}
                src={productData.image}
                alt="Mery Lounge Chair"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products_Details;
