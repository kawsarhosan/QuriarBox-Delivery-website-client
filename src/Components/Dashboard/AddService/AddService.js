import React, { useRef } from 'react';

const AddService = () => {
    const imgRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    
    
    const handleService = e =>{
        const img = imgRef.current.value;
        const title = titleRef.current.value;
        const price = priceRef.current.value;
       const description =descriptionRef.current.value;


       const newService = {img: img, title:title, price: price,  description: description}
        fetch("https://agile-caverns-69214.herokuapp.com/services", {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('New service added successfully!!!');
                e.target.reset();
            }
        })



        e.preventDefault();
    
    }
    return (
        <div className='my-5 py-5 text-center'>
            <h1 className='custom-color'>Add a service</h1>
            <div className='w-25 d-block mx-auto'>
            <form onSubmit={handleService}>
            <input ref={imgRef} className='form-control' type="text" placeholder='Img URL' /><br/>
            <input ref={titleRef} className='form-control' type="text" placeholder='Title' /><br/>
            <input ref={priceRef} className='form-control' type="text" placeholder='Price' /><br/>

            <textarea ref={descriptionRef} className='form-control' placeholder='Description' id="" cols="30" rows="2"></textarea><br/>
            <input className='btn custom-btn' type="submit" value="Add Service" />
            
            </form>
            </div>
        </div>
    );
};

export default AddService;