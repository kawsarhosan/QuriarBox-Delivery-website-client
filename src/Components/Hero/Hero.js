import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='container hero'>
            <div className=' d-lg-flex justify-content-around align-items-center'>
                <div className='pe-5' > 
                    <h1 className="fw-bold custom-color">A trusted provider</h1>
                    <h5>of courier services.</h5>
                    <p className="text-muted">“We deliver your products safely to your home in a reasonable time"</p>
                    <button className='btn custom-btn'>Get your service</button>
                </div>
                <div>
                    <img className="w-100" src="/images/Illustration.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;