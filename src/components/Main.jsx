import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Row, Col } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import UserCard from "./UserCard";

const Main = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }

            file(relativePath: { eq: "photo1.png" }) {
                childImageSharp {
                    fixed(width: 450) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <Row className="py-5 flex-grow-1 text-center text-md-left">
            <Col className="pb-5">
                <h1
                    className="mb-4 display-4"
                    style={{ fontFamily: "Lora, serif", fontWeight: "400" }}
                >
                    {data.site.siteMetadata.title}
                </h1>

                <p
                    className="lead text-secondary"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "300" }}
                >
                    A full-Service residential & <br /> commercial interior design and <br />
                    staging company offering <br />
                    professional organizing & eco-services.
                </p>

                <Link
                    href="/"
                    className="text-white"
                    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "600" }}
                >
                    Read more <FaLongArrowAltRight />
                </Link>
            </Col>

            <Col className="d-flex flex-column align-items-center align-items-md-end">
                <Img fixed={data.file.childImageSharp.fixed} className="img-fluid float-md-right" />

                <UserCard />
            </Col>
        </Row>
    );
};

export default Main;
