import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar className="navBarNav" bg="secondary" expand="lg">
      <Navbar.Brand className="text-white" href="/">
        Ardee's Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="text-white" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="text-white" href="#projectID">
            Projects
          </Nav.Link>
          <Nav.Link className="text-white" href="#contactID">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
