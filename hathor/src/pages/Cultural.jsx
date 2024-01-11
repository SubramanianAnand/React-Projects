import React, { useEffect } from "react";
import "../css/Cultural.css";
import photo1 from "../img/Group 1261153056.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cultural() {

useEffect(()=>{
   AOS.init();
});

  return (
    <div className="cultural">
      <div className="image2">
        <div className="img2" data-aos="fade-left">
          <img src={photo1} />
        </div>
      </div>
      <div className="catalyst" data-aos="fade-right">
        <p className="line4">CULTURAL</p>
        <p className="line5">CATALYST</p>
        <p className="line6">
          With unwavering commitment to innovation, expertise, and fairness,
          we're your trusted partner in navigating business landscape and
          building your success story.
        </p>
      </div>
    </div>
  );
}

export default Cultural;
