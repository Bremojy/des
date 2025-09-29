// src/components/About.jsx
import React from 'react';
import '../App.css';

const About = () => {
  return (
    <section className="about-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <p className="lead text-center">
              <strong>DES Security Services</strong> is a registered private security company 
              headquartered in Nairobi County, with a branch office in Ruiru-Kiambu. 
              We are committed to delivering <em>Excellent Safety by Design</em> through modern 
              security solutions and highly trained personnel.
            </p>

            <h4 className="mt-5">Our Background</h4>
            <p>
              Founded to meet the growing demand for reliable and professional security services, 
              DES Security Services provides guarding, investigations, aviation security, event 
              management, CCTV installations, fencing, and alarm systems. Our personnel, many drawn 
              from disciplined forces, embody integrity, agility, and professionalism.
            </p>

            <h4 className="mt-4">Core Values</h4>
            <ul>
              <li><strong>Customer Values & Agility:</strong> We listen, adapt, and provide effective solutions tailored to client needs.</li>
              <li><strong>Professionalism & Integrity:</strong> We uphold the highest ethical standards in all operations.</li>
              <li><strong>Our People, Our Pride:</strong> We attract, train, and retain skilled staff, empowering them to deliver excellence.</li>
              <li><strong>Corporate Governance:</strong> Guided by transparency, accountability, and continuous risk assessment.</li>
              <li><strong>Excellence & Efficiency:</strong> We deliver value and reliability in every service we provide.</li>
            </ul>

            <h4 className="mt-4">Training & Recruitment</h4>
            <p>
              All recruits undergo thorough vetting, including police clearance, followed by six 
              weeks of intensive training in areas such as patrols, firefighting, first aid, 
              disaster preparedness, and customer care. Continuous refresher courses ensure our 
              guards remain disciplined, skilled, and ready for modern challenges.
            </p>

            <h4 className="mt-4">Why Choose Us?</h4>
            <ul>
              <li>Comprehensive supervisory system with 24/7 patrols and monitoring.</li>
              <li>Strong partnerships with Kenya Police for rapid response.</li>
              <li>Guards insured under contractual liability with Sanlam General Insurance Ltd.</li>
              <li>Customized security solutions tailored to client needs.</li>
            </ul>

            <p className="mt-4 text-center">
              <em>
                At DES Security Services, security is more than just safeguarding life and property —
                it’s about trust, integrity, and excellence in every detail.
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
