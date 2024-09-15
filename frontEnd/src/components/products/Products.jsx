import homePageData from "../homepage_api.json";

function Products() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1>Our Products</h1>
            <p>There are some of our products</p>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {homePageData.products.map((e, i) => (
              <div className="col" key={i}>
                <div
                  className="card shadow"
                  style={{ border: "2px solid #008080" }}
                >
                  <img src={e.image} className="card-img-top" alt={e.title} />
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">{e.desc}</p>
                    <p className="text-center">{e.price}</p>
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
