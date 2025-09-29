import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

const Navbar = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-dark text-light small py-2 px-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="bi bi-geo-alt me-2"></i>
          <span className="me-4">1ST.FLOOR-KIMBO, Lake Oil petrolstation, Ruiru</span>
          <i className="bi bi-clock me-2"></i>
          <span>Mon - Sat 8:00 - 18:00 | Control Room Open 24/7</span>
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-telephone me-2"></i>
          <span className="fw-bold me-3">0796585315</span>
          <a href="https://facebook.com" className="text-light me-3">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" className="text-light me-3">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-light">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-black sticky-top shadow-sm px-3">
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src="/images/logo.jpg"
              alt="DES Logo"
              style={{
                height: "70px",          // bigger height
                width: "70px",           // bigger width
                objectFit: "cover",
                marginRight: "12px",
                borderRadius: "15%",     // softer edges instead of full circle
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)", // shadow for attraction
                border: "2px solid #ffc107", // gold border highlight
              }}
            />
            <span
              className="fw-bold"
              style={{
                fontSize: "1.3rem",
                color: "#ffc107", // gold like Lizmar
                letterSpacing: "1px",
              }}
            >
              DES SECURITY SERVICES
            </span>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link fw-semibold">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link fw-semibold">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link fw-semibold">
                  Our Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link fw-semibold text-warning">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
