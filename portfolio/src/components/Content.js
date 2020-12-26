import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
export default function Content(props) {
    return (
        <Container fluid={true}>
            <Row className="justify-content-centre">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )//props.children will inherit whatever is between the content tag in the about.js so we can just edit there
}
