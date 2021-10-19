import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../context/useAuth";

const Menubar = () => {
  const { handleLogout, user } = useAuth();
  return (
    // navbar component
    <>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#0c4c91" }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            SECOND LIFE HOSPITAL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#about">
                About
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#service">
                Service
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
              {user.email && <Nav.Link>Welcome {user.displayName}</Nav.Link>}
            </Nav>
            {user.email ? (
              <Button onClick={handleLogout} variant="light">
                Logout
              </Button>
            ) : (
              <Button as={Link} variant="light" to="/login">
                Login
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;
