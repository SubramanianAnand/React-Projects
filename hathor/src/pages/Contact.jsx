import React, { useEffect } from "react";
import '../css/Contact.css'
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {

useEffect(()=>{
  AOS.init()
});

  return (
    <div> 
      <div className="contact">
        <div className="ready" data-aos="fade-right">
          <p>
            READY TO UNLOCK YOUR <span>SUCCESS?</span>
          </p>
          <p id="text">
            Join forces with our dynamic team at Hathor Union and let us drive
            your journey to unparalleled success. Your goals, our expertise - a
            partnership that empowers. Get in touch today!
          </p>
          <button className="button">Contact Us</button>
        </div>
        <div className="animate" data-aos="fade-left">
            <div className="animate1">
                <img src="https://hathorunion.com/assets/ball-f9640521.gif"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
