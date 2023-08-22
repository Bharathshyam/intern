import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <section id="home" className='header'>
      <div >

      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">BHARATH <span className='text-primary'>SHYAM</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <div>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
                   
          </Nav>

          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
      

    </section>
    
  )
}

export default Header