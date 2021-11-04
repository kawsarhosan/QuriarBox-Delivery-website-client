import React from 'react';

import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className='container mt-3'>
            <Link to='/addservice'><button className="btn custom-btn me-2">Add New Service</button></Link>
            <Link to='/myorders'><button className="btn custom-btn me-2">My Orders</button></Link>
            <Link to='/manageallorders'><button className="btn custom-btn">Manage All Orders</button></Link>

        </div>



        
    );
};

export default Dashboard;