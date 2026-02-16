import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <>
    <section className="mb-3">
      <Navbar expand="lg" fixed="top" className="custom-navbar">
        <Container>
          <div className="d-flex gap-1 align-items-center">
            <h2 className="btn btn-warning brand-badge rounded-4 text-center p-2">
              KN
            </h2>
            <h4>Krishnova</h4>
           
          </div>
          <Navbar.Toggle />
          <div className="navbar " >
            
                <ul className="navbar-nav nav-listitems">
                    <li className="nav-link">Home</li>
                    <li className="nav-link">About</li>
                    <li className="nav-link">Brands</li>
                    <li className="nav-link">Contact</li>
                    <li className="nav-link btn btn-outline-light ">Visit Us</li>
                </ul>
            
          </div>
        </Container>
      </Navbar>
      </section>
    </>
  );
}

export default Header;
