import React from 'react';
import {  useParams } from 'react-router';
import useServices from '../Hooks/useServices';

const ServiceDetails = (props) => {
    
    const {id} = useParams();
    const {services} = useServices();
    
    
    return (
        <div>
            this is service detrails page: {id} <br/>
            
            {
                services.map(service=> <h1>{service.title}</h1> )
            }
        </div>
    );
};

export default ServiceDetails;