import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';


const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    
    

    useEffect(()=>{
        const url = 'https://agile-caverns-69214.herokuapp.com/neworder';
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
           
            const myOrder = data.filter(order=>order.name === user.displayName)
            setOrders(myOrder);

        })

    },[])

    const handleDelete = id =>{
        console.log('delete')
        const url = `https://agile-caverns-69214.herokuapp.com/neworder/${id}`;
    fetch(url,{
        method :'DELETE'
    })
    .then(res=> res.json())
    .then(data=> {
        if(data.deletedCount >0){
            alert('Remove Succefully')
            const remainOrder = orders.filter(order=>order._id!== id);
            setOrders(remainOrder);
        }
    })
    }
    
    return (
        
        <div className='container my-4 text-center'>
        
                <table className="table align-middle">
                <thead>
                        <tr>
                       
                        <th scope="col">Product Name</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope='col'>Status</th>
                        <th scope="col">Cancle Order</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(order=>
                            <tr key={order._id}>
                            
                            <td>{order.title} </td>
                            <td>{order.name}</td>
                            <td>{order.mobile}</td>
                            <td>{order.email}</td>
                            <td><button type="button" className="btn btn-warning btn-sm px-3">{order.status}</button></td>
                            <td><button onClick={() =>handleDelete(order._id)} type="button" className="btn btn-danger btn-sm px-3">
                            <i className="fas fa-times"></i>
                            </button></td>
                            </tr>
                            
                        )
                    }
                    </tbody>
                    </table>
                  
        </div>
    );
};

export default MyOrders;