import React from 'react';

const reasons = [
  { title: 'Professional Guards', description: 'Highly trained & vetted personnel' },
  { title: 'Modern Tech', description: 'CCTV, alarms and more' },
  { title: '24/7 Support', description: 'Always there when you need us' }
];

const WhyChoose = () => {
  return (
    <section className="why-choose my-5">
      <h2 className="text-center mb-4">Why Choose DES Security?</h2>
      <div className="row">
        {reasons.map((r, idx) => (
          <div key={idx} className="col-md-4 text-center">
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
