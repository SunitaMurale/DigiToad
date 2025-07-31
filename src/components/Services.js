import React from "react";
import "./Services.css";

import productImg from "../assets/products.png";
import serviceImg from "../assets/settings.png";
import academicImg from "../assets/aca.png";
import partnerImg from "../assets/part.png";

const services = [
  {
    title: "Products",
    desc: "Looking for something specific? Check out our comprehensive list of available products.",
    img: productImg,
  },
  {
    title: "Services",
    desc: "Looking for something specific? Check out our current list of available services.",
    img: serviceImg,
  },
  {
    title: "Academic",
    desc: "Embedded Machine Learning Education, Industry 4.0, and a Center of Excellence.",
    img: academicImg,
  },
  {
    title: "Partnership",
    desc: "Looking to collaborate with a dynamic and innovative team? You’re in the right place!",
    img: partnerImg,
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2 className="services-heading">What are you looking for?</h2>
      <div className="service-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <img src={s.img} alt={s.title} className="service-img" />
            <div className="service-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
            <div className="arrows">
             
              <span className="arrow">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
