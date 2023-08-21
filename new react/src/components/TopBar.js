import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';


const TopBar = () => {
  return (
    <>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><h2 className='text-primary'>FOODIE <span className='text-black'>FOODS</span></h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav>
            <Link to={'/'} className='fw-bold p-2' >Home</Link>
              <Link to={'/about'} className='fw-bold p-2'>About</Link>
              <Link to={'/contactus'}  className='fw-bold p-2'>Contact us</Link>
              <Link to={'/ordernow'} className='fw-bold p-2'>Order Now</Link>


           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet/>
    </>



  )
}

export default TopBar