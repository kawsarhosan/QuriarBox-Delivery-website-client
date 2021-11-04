import React from 'react';
import FindUs from '../FindUs/FindUs';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Tracking from '../Tracking/Tracking';


const Home = () => {
    return (
        <div className=''>
           <Hero></Hero>
           <Tracking></Tracking>
           <Services></Services>
           <FindUs></FindUs>
        </div>
    );
};

export default Home;