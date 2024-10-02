import Best_Sellings_Title from "./Best_Sellings_Title";

function Best_Selling_Card({ homePageData }) {
  return (
    <>
      <div className="container mt-5">
        <Best_Sellings_Title />
        <div className="row g-3">
          {homePageData.map((e, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6">
              <div
                className="card h-100 shadow-lg"
                style={{ border: "2px solid #008080" }}
              >
                <img
                  src={e.image}
                  className="card-img-top"
                  alt={e.title}
                  style={{ objectFit: "cover", height: "250px" }}
                />
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
      </div>
    </>
  );
}

export default Best_Selling_Card;
