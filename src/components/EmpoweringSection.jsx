import React, { useEffect, useRef } from 'react';
import './EmpoweringSection.css';
import img1 from "../assets/logoipsum-278.png"
import img2 from "../assets/logoipsum-287.png"
import img3 from "../assets/logoipsum-290.png"
import img4 from "../assets/logoipsum-300.png"
import img5 from "../assets/logoipsum-349.png"
import img6 from "../assets/logoipsum-365.png"
import img7 from "../assets/logoipsum-381.png"

const logos = [img1,img2,img3,img4,img5,img6,img7,img2,img3,img4,img5,img6,img7,img4,img5,img6,img7,img2,img3];

export default function EmpoweringSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="empowering-section">
      <h2>Empowering tomorrow’s world at work</h2>
      <p>
        We’ve been at the forefront of shaping the future of AI and work. Whether for startups or Fortune 500 companies, we’re empowering our members to envision new possibilities in their work.
      </p>
      <div className="logo-carousel" ref={scrollRef}>
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt={`logo-${i}`} className="carousel-logo" />
        ))}
      </div>
    </section>
  );
}
