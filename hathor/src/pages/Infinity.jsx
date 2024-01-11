import React, { useEffect } from 'react'
import '../css/Infinity.css'
import AOS from "aos";
import "aos/dist/aos.css";

function Infinity() {

useEffect(() =>{
  AOS.init()
});

  return (
    <div>
        <div className='infinity'>
            <div className='gif'>
                <img src='https://hathorunion.com/assets/infinity-e69d7459.gif'/>
            </div>
            <div className='imagination' data-aos="zoom-in-up">
              <p>Your<span> Imagination</span></p>
            </div>
        </div>
    </div>
  )
}

export default Infinity