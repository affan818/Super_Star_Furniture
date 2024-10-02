import { Link } from "react-router-dom";

function Products({ homePageData }) {
  return (
    <>
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1>Our Products</h1>
            <p>There are some of our products</p>
          </div>
          {/* Updated line for responsive columns */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {homePageData.map((e, i) => (
              <div className="col" key={i}>
                <div
                  className="card shadow"
                  style={{
                    width: "300px",
                    height: "500px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    border: "2px solid #008080",
                  }}
                >
                  <div className="card-body" style={{ flex: "5" }}>
                    <img
                      src={e.image}
                      className="card-img-top"
                      style={{ height: "50%" }}
                      alt={e.title}
                    />
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">{e.desc}</p>
                    <p className="text-center">{e.price}</p>
                    <div
                      className="btn d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#008080",
                        color: "#fff",
                        height: "50px",
                        fontFamily: "Poppins",
                        fontSize: "1.25rem",
                      }}
                    >
                      <Link
                        to="/product_Details"
                        state={{ productData: e }}
                        className="text-white"
                        style={{ textDecoration: "none" }}
                      >
                        shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
