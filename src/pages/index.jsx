import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <div style={{ backgroundColor: "#181719" }}>
            <Container className="vh-100 d-flex flex-column text-white">
                <Header />
                <Main />
                <Footer />
            </Container>
        </div>
    );
};

export default Index;
