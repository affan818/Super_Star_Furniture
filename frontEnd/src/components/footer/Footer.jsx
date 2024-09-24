import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer
      className="container-fluid text-black pt-1"
      style={{
        backgroundColor: "#C1B7A2",
        color: "#4E342E",
        fontFamily: "Poppins",
      }}
    >
      <div className="container mt-4" style={{ color: "#4E342E" }}>
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 col-sm-12 mb-3 text-center text-md-start">
            <h2>Super Star Furniture</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              eius.
            </p>
          </div>
          {/* Links Section */}
          <div className="col-md-4 col-sm-12 mb-3 text-center text-md-start">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media Section */}
          <div className="col-md-4 col-sm-12 mb-3 text-center text-md-start">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
              <li>
                <Link to="#" className="text-black me-3">
                  <SocialIcon url="https://www.facebook.com/" />
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black me-3">
                  <SocialIcon url="https://twitter.com" />
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black me-3">
                  <SocialIcon url="https://www.instagram.com/" />
                </Link>
              </li>
              <li>
                <Link to="#" className="text-black me-3">
                  <SocialIcon url="https://www.pinterest.com" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="text-center pt-3 border-top mt-3"
          style={{ fontSize: "20px" }}
        >
          <p className="mb-0">
            © 2024 Super Star Furniture. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
