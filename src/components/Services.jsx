// src/components/Services.jsx
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const services = [
  { title: 'Security Guarding Services', icon: 'bi-shield-lock' },
  { title: 'General Security Consultancy', icon: 'bi-people' },
  { title: 'Aviation Security', icon: 'bi-airplane' },
  { title: 'General Investigations', icon: 'bi-search' },
  { title: 'Crime Scene Investigations', icon: 'bi-binoculars' },
  { title: 'Tourist & VIP Escort', icon: 'bi-car-front' },
  { title: 'Electronic Intruder Alarms & Backup', icon: 'bi-bell' },
  { title: 'CCTV Installations & Monitoring', icon: 'bi-camera-video' },
  { title: 'Events Security Management', icon: 'bi-calendar-event' },
  { title: 'Electric & Razor Wire Fencing', icon: 'bi-lightning' },
  { title: 'Perimeter Protection & Access Control', icon: 'bi-key' },
  { title: 'Dog Security & Patrols', icon: 'bi-shield-shaded' },
];

const Services = () => {
  return (
    <section className="services-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {services.map((service, idx) => (
            <div key={idx} className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="card text-center service-card shadow-sm w-100">
                <div className="card-body">
                  <i className={`bi ${service.icon} service-icon mb-3`}></i>
                  <h5 className="card-title">{service.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
