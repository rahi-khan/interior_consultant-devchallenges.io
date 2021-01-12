import React from "react";
import { Link } from "gatsby";
import { Row, Col, Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <Row className="py-2 border border-primary">
            <Col>
                <Navbar variant="dark" expand="md">
                    <Navbar.Brand as={Link} to="/" className="px-3 border">
                        This Interior
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} href="/" className="mr-5">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} href="/" className="mr-5">
                                Collection
                            </Nav.Link>
                            <Nav.Link as={Link} href="/" className="mr-5">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} href="/">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    );
};

export default Header;
