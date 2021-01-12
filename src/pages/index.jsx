import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <Container>
            <Row>
                <Col className="vh-100 d-flex flex-column text-white">
                    <Header />
                    <Main />
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
};

export default Index;
