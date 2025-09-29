// src/components/Contact.jsx
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const Contact = () => {
  return (
    <section className="contact-section py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">Get in Touch</h2>
        <p className="mb-5">
          Need professional security solutions? Reach out to us today and let us secure your premises with
          <strong> Excellence, Integrity, and Agility.</strong>
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm border-0 p-4 mb-4">
              <h5 className="mb-3"><i className="bi bi-building me-2"></i> Head Office</h5>
              <p>Ruiru – Kiambu, Nairobi County</p>
              <p>P.O. Box 273-00232</p>
            </div>

            <div className="card shadow-sm border-0 p-4 mb-4">
              <h5 className="mb-3"><i className="bi bi-telephone me-2"></i> Call Us</h5>
              <p>Telephone: 0796 585 315</p>
              <p>Hotline: 0796 586 029</p>
            </div>

            <div className="card shadow-sm border-0 p-4">
              <h5 className="mb-3"><i className="bi bi-envelope me-2"></i> Email</h5>
              <p>
                <a href="mailto:dessservices254@gmail.com">
                  dessservices254@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <a href="mailto:dessservices254@gmail.com" className="btn btn-primary btn-lg">
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
