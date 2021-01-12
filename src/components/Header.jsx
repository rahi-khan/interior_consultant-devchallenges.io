import React from "react";
import { Link } from "gatsby";
import { Row, Col, Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <Row className="pt-3">
            <Col className="px-0">
                <Navbar variant="dark" expand="md">
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        className="px-3 border"
                        style={{ fontFamily: "Crimson Pro, serif", fontWeight: "200" }}
                    >
                        <h6 className="py-1 mb-0">This Interior</h6>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="ml-auto"
                            style={{ fontFamily: "Montserrat, serif", fontWeight: "700" }}
                        >
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
