import React, { useEffect } from 'react'
import '../css/Strategy.css'
import AOS from "aos";
import "aos/dist/aos.css";

function Strategy() {

useEffect(()=> {
    AOS.init()
})

  return (
    <div>
        <div className='strategy'>
            <div className='section'>
                <div className='main'>
                    <div className='img'>
                        <img src='https://hathorunion.com/assets/landing_hero-95d39222.gif' alt='square-gif'/>
                        <div className='synergy' data-aos="zoom-in-up">
                            <p>Strategy</p>
                        </div>
                    </div>
                    <div className='trifecta'>
                        <p id='tri'>Your Business Trifecta</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Strategy