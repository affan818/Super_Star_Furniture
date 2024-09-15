import icon1 from "/images/supply.png";
import Rating from "/images/rating.png";
import FreeDelivery from "/images/free-shipping.png";
function About() {
  return (
    <>
      <div className=" container col-lg-12 col-sm-3 shadow mb-5">
        <div className="container text-center m-3 my-5 p-4 rounded m-auto ">
          <h1 className="text-center mb-2" style={{ fontFamily: "Poppins" }}>
            About Us
          </h1>
          <p className="text-center" style={{ fontFamily: "Poppins" }}>
            Order now and appreciate the furniture
          </p>
        </div>

        <div
          className="my-4 col-lg-12 col-sm-3  shadow"
          style={{ backgroundColor: "#C1B7A2" }}
        >
          <div className="row text-center m-auto">
            <div className="col-md-4 m-auto">
              <div className="p-3 ">
                <img style={{ height: "60px" }} src={Rating} alt="icon" />
                <div className="text-center fs-8">
                  <h4 style={{ fontFamily: "Poppins" }}>Valuable Customers</h4>
                  <p style={{ fontFamily: "Poppins" }}>
                    {" "}
                    We offer many different type of products with fewer
                    variations in each category
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-auto">
              <div className="p-3">
                <img style={{ height: "60px" }} src={FreeDelivery} alt="icon" />

                <h4 style={{ fontFamily: "Poppins" }}>
                  Fast and Free Shipping
                </h4>
                <p style={{ fontFamily: "Poppins" }}>
                  4-day or less delivery time, free shipping and an expedited
                  delivery option
                </p>
              </div>
            </div>
            <div className="col-md-4 m-auto">
              <div className="p-3">
                <img style={{ height: "60px" }} src={icon1} alt="icon" />
                <h4 style={{ fontFamily: "Poppins" }}>Large Market Supply</h4>
                <p style={{ fontFamily: "Poppins" }}>
                  We have a confidential and large contribute in the overall
                  market
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
