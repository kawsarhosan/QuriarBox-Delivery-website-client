// import React, { useEffect, useState } from 'react';
import useServices from '../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {

    const {services, setServices} = useServices({});

    // useEffect(()=>{
    //     const url = 'http://localhost:5000/services';
    //     fetch(url)
    //     .then(res=> res.json())
    //     .then(data=> setServices(data))

    // },[])
    return (
        <div>
            <div className=''>
           <div className=' text-center my-5 fw-bold'>
               <h1 className='fw-bold custom-color '>All Services</h1>
           </div>
           <div className='container '>
           <div className="row row-cols-1 row-cols-md-3 g-4 ">
           {
                services.map(service=><Service
                key={service._id}
                service={service}
                ></Service>)
            }
            </div>

        </div>
           </div>
            
        </div>
    );
};

export default Services;