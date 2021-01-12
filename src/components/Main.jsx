import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";

const Main = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    content
                }
            }
        }
    `);

    return (
        <Row className="border border-danger flex-grow-1">
            <Col>
                <h3 className="mb-4">{data.site.siteMetadata.title}</h3>
                <p className="lead">
                    A full-Service residential & <br /> commercial interior design and <br />
                    staging company offering <br />
                    professional organizing & eco-services.
                </p>
                {/* <p className="lead">{data.site.siteMetadata.content}</p> */}
            </Col>

            <Col></Col>
        </Row>
    );
};

export default Main;
