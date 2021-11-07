import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {  useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PlaceOrder = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [placeOrder, setPlaceOrder] = useState({});

    const addressRef = useRef();
    const mobileRef = useRef();

    const title = placeOrder.title;
    const status ="Pending";

    const handleOrder = e =>{
       
       
        const address = addressRef.current.value;
        const mobile = mobileRef.current.value;

        const newOrder = {name:user.displayName, email:user.email , address: address, mobile: mobile, id: id, title: title, status: status }

        fetch("https://agile-caverns-69214.herokuapp.com/neworder", {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('New order added successfully!!!');
                e.target.reset();
            }
        })

        e.preventDefault();
    }

    useEffect( ()=>{
        fetch(`https://agile-caverns-69214.herokuapp.com/placeorder/${id}`)
        .then(res=> res.json())
        .then(data => setPlaceOrder(data))
    },[])
    return (
        <div className='my-3 p-3'>
            <h2 className='custom-color fw-bold text-center mb-5'>Place your order:</h2>
            <Container>
                <Row>
                    <Col className=''>
                        <div className='d-block mx-auto'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={placeOrder.img} />
                            <Card.Body className=" text-center">
                                <Card.Title><h2 className='custom-color fw-bold'>{placeOrder.title}</h2></Card.Title>
                                <Card.Text>
                                <h4>Price: ${placeOrder.price}</h4>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                    
                    </Col>
                    <Col className="shadow rounded">
                    <div className='p-5 d-block mx-auto'>
                        
                        <h3 className='fw-bold custom-color text-center'>Your Information</h3>
                        <form onSubmit={handleOrder}>
                        <p className="fw-bold text-center">Ordered by: {user.displayName}</p>
                        <p className="fw-bold text-center">Email: {user.email}</p>
                        <br/>
                        <textarea ref={addressRef} className='form-control' placeholder='Address' id="" cols="30" rows="2"></textarea><br/>
                        <input ref={mobileRef} className='form-control' type="tel" placeholder='Mobile' /><br/>

                        <input className='btn custom-btn d-block mx-auto' type="submit" value="Place Order" />
                        
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;