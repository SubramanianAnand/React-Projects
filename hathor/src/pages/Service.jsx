import React, { useEffect } from "react";
import "../css/Service.css";
import animation from "../img/Our service Animation.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Service() {

  useEffect(() =>{
    AOS.init();
  },[]);

  return (
    <div className="service">
      <div className="head" data-aos="fade-right">
        <p>Our Services</p>
        <li>
          Crafting Roads For Entrepreneurial Success; Our Comprehensive Business
          Planning Services, From Setup To Execution, Are Designed To Empower
          You In Turning Innovative Ideas Into Thriving Success Stories.
        </li>
        <li>
          Enhancing Your Brand Combining Creativity And Precision. Through
          Innovative Strategies, We Draft, Test, And Refine Approaches That
          Amplify Your Brand's Impact, Making It Shine Brightly In The
          Competitive Landscape.
        </li>
        <li>
          Hathor Synergy Is Where Collaboration Thrives, Ideas Flourish, And
          Mutual Support Propels The Growth Of Every Network Partner. As A
          Dedicated Channel Partner, Shine Bright With Synergy And Shared
          Success.
        </li>
      </div>
      <div className="hathor" data-aos="fade-left">
        <div className="img">
          <img src={animation} />
        </div>
      </div>
    </div>
  );
}

export default Service;
