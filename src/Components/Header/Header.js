import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


import { Link } from 'react-router-dom';
import "./Header.css";
import useFirebase from '../Hooks/useFirebase';



const Header = () => {
  const {user,logOut} = useFirebase();
    return (
        
            <Navbar sticky='top' bg='myBg'  expand="lg">
        <Container className=''>
          <Navbar.Brand>
              <img src="/logo.png"  alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            
            
            <Nav
              className="ms-auto my-2 my-lg-0 text-white"
              
              navbarScroll
            >
              <Nav.Link><Link to="/home">Home</Link></Nav.Link>
              <Nav.Link><Link to="/services">Our Services</Link></Nav.Link>
              <Nav.Link><Link to="/tracking">Tracking</Link></Nav.Link>
        
            </Nav>
            
            <div className='ms-3'>
            <Link className='fw-bold custom-color mx-2' to="#">{user.displayName}</Link>
            {
             user?.displayName && <Link to="/dashboard">
              <button className="btn btn-outline-danger me-2">Dashboard</button>
            </Link>
            }
            
            
            {
             !user?.displayName && <Link to="/login">
              <button  className="btn custom-btn">Login</button>
            </Link>
            }
            
            {
             user?.displayName && <Link to="#">
              <button onClick={logOut} className="btn custom-btn">Logout</button>
            </Link>
            }
            </div>
            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
};

export default Header;