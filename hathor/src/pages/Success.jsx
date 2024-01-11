import React, { useEffect } from "react";
import photo3 from "../img/Group 1261153071.png";
import "../css/Success.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Success() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="success">
      <div className="empower" data-aos="fade-right">
        <p className="line7">SUCCESS</p>
        <p className="line8">EMPOWERMENT</p>
        <p className="line9">
          We empower your business journey with our comprehensive suite of
          services. From cutting-edge promotional strategies to tailored
          planning and hands-on executive assistance, we've got your success
          covered.
        </p>
      </div>
      <div className="image3">
        <div className="img3" data-aos="fade-left">
          <img src={photo3} />
        </div>
      </div>
    </div>
  );
}

export default Success;
