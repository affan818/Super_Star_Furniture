import { useEffect, useState } from "react";
import Best_Selling_Card from "../cards/Best_Selling_Card";
import axios from "axios";
import Products from "../products/Products";

function Home() {
  const [homePageData, setHomePageData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "http://localhost:5000/api/homepage";
    axios(url)
      .then((res) => {
        setHomePageData(res.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`Error => ${err}`);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loding</h1>
      ) : (
        <div className="container-fluid" style={{ color: "#4E342E" }}>
          {/* Hero section */}
          <div
            className="p-5 rounded-4"
            style={{ backgroundColor: "#C1B7A2", color: "#4E342E" }}
          >
            <div className="row align-items-center">
              {/* Text section */}
              <div className="col-md-6 col-12 mb-4 text-center text-md-left">
                <h1
                  className="mb-4"
                  style={{ fontSize: "40px", fontFamily: "Poppins" }}
                >
                  Buy Awesome Furniture!
                </h1>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mb-4">
                  <div className="text-center">
                    <h4>{homePageData.banner.no_of_furnitures}+</h4>
                    <h6 style={{ fontFamily: "Poppins" }}>Furnitures</h6>
                  </div>

                  {/* Vertical Line */}
                  <div
                    className="vr mx-3 d-none d-md-block"
                    style={{ height: "60px", borderLeft: "2px solid black" }}
                  ></div>

                  <div className="text-center">
                    <h4>{homePageData.banner.no_of_customers}+</h4>
                    <h6 style={{ fontFamily: "Poppins" }}>Customers</h6>
                  </div>
                </div>

                {/* Button */}
                <div className="text-center">
                  <button
                    className="btn btn-lg"
                    style={{
                      width: "150px",
                      height: "50px",
                      fontFamily: "Poppins",
                      backgroundColor: "#008080",
                      color: "#fff",
                    }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Image section */}
              <div className="col-md-6 col-12 text-center">
                <img
                  src="https://edgelivingfurniture.com.au/assets/img/products/_500x500_fit_center-center_75_none/N190-Nordal-2.5s-C118-911_IMG00738.webp"
                  alt="sofa"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
          <Best_Selling_Card homePageData={homePageData.best_selling} />
          <Products homePageData={homePageData.products} />
        </div>
      )}
    </>
  );
}

export default Home;
