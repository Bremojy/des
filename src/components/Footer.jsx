import "../App.css"; // Ensure Bootstrap is loaded in your app

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About / Welcome */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">DES Security Services</h5>
            <p className="text-muted">
              Your trusted partner in protection and peace of mind. We offer guard services,
              CCTV installation, and 24/7 monitoring across Kenya.
            </p>
            <button className="btn btn-danger btn-sm mt-2">
              <span className="badge bg-light text-dark">WELCOME</span>
            </button>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Stay Connected</h5>
            <div className="d-flex justify-content-center justify-content-md-start align-items-center mt-3">
              <a
                href="https://wa.me/254796585315"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <img
                  src="/images/whatsapp.webp"
                  alt="WhatsApp"
                  height="50"
                  width="50"
                  className="rounded-circle border border-white"
                />
              </a>
              <a
                href="https://www.facebook.com/share/1B3o8kZEhF/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/f.jpg"
                  alt="Instagram"
                  height="50"
                  width="50"
                  className="rounded-circle border border-white"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">Home</a>
              </li>
              <li>
                <a href="/services" className="text-white text-decoration-none">Our Services</a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-3 border-top mt-4">
          <small>&copy; 2025 DES Security Services LTD. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
