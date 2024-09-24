import { FaArrowRight } from "react-icons/fa6";

function Best_Sellings_Title() {
  return (
    <>
      <div className="mt-4 mb-4">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div className="left_text text-center">
            <h1 style={{ fontFamily: "Poppins" }}>Best Selling Furnitures</h1>
            <p style={{ fontFamily: "Poppins" }}>
              Get the best deals on the best selling furnitures
            </p>
            <button
              className="btn btn-block"
              style={{
                backgroundColor: "#008080",
                color: "#fff",
                fontSize: "18px",
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

export default Best_Sellings_Title;
