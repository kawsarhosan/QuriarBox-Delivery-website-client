import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id,img, title, price, description} =props.service;
    return (
        <div>
            
            <div className="col">

                <div className='card-group h-100 shadow-sm'>
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className='d-flex justify-content-between fs-6 text-muted'>
                        <h2 className='custom-color fw-bold'>{title}</h2>
                    </div>
                    <h6 className="card-title text-muted">{description}</h6><br/>
                <div className=' d-flex justify-content-between align-items-center'>
                        <h4 className='fw-bold'>Price: ${price}</h4>
                        <Link to={`/placeorder/${_id}`} children={props.service}><button  className="btn custom-btn">Order Now</button></Link>
                </div>
                </div>
                </div>
                </div>
                </div>
                
                </div>
                    
                    );
                };

export default Service;