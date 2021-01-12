import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Row, Col } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";

const Main = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    content
                }
            }

            file(relativePath: { eq: "photo1.png" }) {
                childImageSharp {
                    fixed(width: 500) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <Row className="pt-5 border border-danger flex-grow-1">
            <Col md={6} className="border border-danger">
                <h3 className="mb-4">{data.site.siteMetadata.title}</h3>

                <p className="lead">
                    A full-Service residential & <br /> commercial interior design and <br />
                    staging company offering <br />
                    professional organizing & eco-services.
                </p>

                <Link href="/" className="text-white">
                    Read more <FaLongArrowAltRight />
                </Link>
            </Col>

            <Col md={6} className="border border-danger">
                <Img fixed={data.file.childImageSharp.fixed} className="img-fluid float-md-right" />
            </Col>
        </Row>
    );
};

export default Main;
