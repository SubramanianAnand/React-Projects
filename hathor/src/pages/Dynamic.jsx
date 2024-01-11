import React, { useEffect } from "react";
import "../css/Dynamic.css";
import photo from '../img/Group 1261153070.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Dynamic() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="dynamic">
        <div className="net" data-aos="fade-right">
          <p className="line1">DYNAMIC</p>
          <p className="line2">NETWORKSCAPE</p>
          <p className="line3">
            Our Network of clientele is a vibrant community where businesses
            unite to collaborate, share knowledge, and support one another. We
            believe in the transformative power of connections and partnerships
            to fuel your growth.
          </p>
        </div>
        <div className="image1">
        <div className="img1" data-aos="fade-left">
          <img src={photo} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Dynamic;
