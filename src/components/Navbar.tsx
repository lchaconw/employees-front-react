import React from 'react';
import { Navbar as BSNavbar, Nav, Container, Image } from 'react-bootstrap';

const CustomNavbar: React.FC = () => {
  return (
    <BSNavbar expand="lg" bg="primary" variant="dark">
      <Container fluid>
        <BSNavbar.Brand href="#">
          <Image
            src="https://w7.pngwing.com/pngs/244/323/png-transparent-computer-icons-employee-self-service-business-advertising-human-resources-employee-human-resource-management-service-people-thumbnail.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          Employees
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbar-nav" />
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" active>Home</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default CustomNavbar;
