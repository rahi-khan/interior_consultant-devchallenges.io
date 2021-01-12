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
                width: "63%",
                marginTop: "-5rem",
                marginRight: "2rem",
            }}
        >
            <Card.Header className="d-flex align-items-center text-left">
                <Img
                    fixed={data.file.childImageSharp.fixed}
                    className="rounded-circle img-fluid mr-3"
                />

                <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "500" }}>
                    <h6 className="mb-0">Aliza Webber </h6>
                    <p className="mb-0 text-secondary">Interior designer </p>
                </div>
            </Card.Header>

            <Card.Body className="p-2 text-left">
                <Card.Title>
                    <h6
                        className="mb-0"
                        style={{ fontFamily: "Lora, sans-serif", fontWeight: "700" }}
                    >
                        Designed in 2020 by Aliza Webber
                    </h6>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default UserCard;
