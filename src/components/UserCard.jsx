import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Card } from "react-bootstrap";

const UserCard = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "photo2.png" }) {
                childImageSharp {
                    fixed(width: 65) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <Card
            text="white"
            style={{
                backgroundColor: "#181719",
                boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.8)",
                width: "20rem",
                right: "2rem",
                bottom: "1.5rem",
            }}
            className="position-absolute"
        >
            <Card.Header className="d-flex align-items-center">
                <Img
                    fixed={data.file.childImageSharp.fixed}
                    className="rounded-circle img-fluid mr-4"
                />

                <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500" }}>
                    <h6 className="mb-0">Aliza Webber </h6>
                    <p className="mb-0">Interior designer </p>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className="mb-0">
                    <h5 style={{ fontFamily: "Lora, sans-serif", fontWeight: "700" }}>
                        Designed in 2020 by <br /> Aliza Webber
                    </h5>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default UserCard;
