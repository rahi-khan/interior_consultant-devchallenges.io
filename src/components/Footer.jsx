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
        <Row className="py-3 border border-success">
            <Col>
                <h6 className="text-center">{data.site.siteMetadata.author} @ DevChallenges.io</h6>
            </Col>
        </Row>
    );
};

export default Footer;
