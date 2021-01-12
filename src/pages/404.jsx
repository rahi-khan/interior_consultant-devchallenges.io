import React from "react";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";

const NotFound = () => (
    <div
        className="d-flex flex-column vh-100 justify-content-center align-items-center text-white"
        style={{ backgroundColor: "#181719" }}
    >
        <h1 className="display-4 text-center font-weight-bold mb-5">
            You lost bruh?{" "}
            <span
                role="img"
                aria-label="lost emoji"
            >
                👻😵
            </span>
        </h1>

        <Link to="/">
            <Button variant="outline-info">Back Home</Button>
        </Link>
    </div>
);

export default NotFound;
