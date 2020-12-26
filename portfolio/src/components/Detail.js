import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

export default function Detail(props) {
    return (
        <Container>
            <Row>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}
