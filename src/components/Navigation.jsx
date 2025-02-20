import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">CrowdFund</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/campaign/create">Start Campaign</Nav.Link>
          </Nav>
          <Form className="d-flex me-2">
            <Form.Control
              type="search"
              placeholder="Search campaigns"
              className="me-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Button variant="outline-primary" className="me-2">Login</Button>
            <Button variant="primary">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation; 