import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `);

    return (
        <Row className="py-3">
            <Col>
                <h6
                    className="mb-0 text-center"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "600" }}
                >
                    {data.site.siteMetadata.author} @ DevChallenges.io
                </h6>
            </Col>
        </Row>
    );
};

export default Footer;
